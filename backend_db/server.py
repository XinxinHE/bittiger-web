from flask import Flask, request, jsonify, abort
from flask_restful import Api, Resource
from flask_cors import CORS, cross_origin

from database import DB

app = Flask(__name__)
CORS(app)
app.config.from_envvar('ENV_CONFIG_FILE')

mongo_host = app.config['MONGO_HOST']
mongo_port = app.config['MONGO_PORT']

mongo_endpoint = mongo_host + ":" + str(mongo_port)

db = DB()

@app.route('/')
def hello():
    return 'hello world'

# get all the questions/folders/courses

@app.route("/<table_type>", methods=["GET"])
def get_posts(table_type):
	data = db.readPosts(table_type)
	if data is None:
		return jsonify({'error': 'Info not found'}), 404

	return jsonify(data), 200


# get question/folder/course by id

@app.route("/<table_type>/<id>", methods=["GET"])
def get_post(table_type, id):
	data = db.readPost(table_type, id)
	if data is None:
		return jsonify({'error': 'Post not found'}), 404

	return jsonify(data), 200


@app.route("/<table_type>", methods=["POST"])
def insert_data(table_type):
	if not request.json:
		abort(404)
	json_data = request.json
	

	resp = db.insertPost(table_type, json_data)
	if resp == None:
		return jsonify({'status': 'failure'}), 404

	return jsonify(resp), 200


@app.route("/<table_type>/<id>", methods=["PUT"])
def update_data(table_type, id):
	if not request.json:
		abort(400)

	resp = db.update(table_type, id, request.json)

	if resp == None:
		return jsonify({'error': 'Record not found'}), 404
	print("-----------------------------------")
	print(resp)
	return jsonify(resp), 200

@app.route("/<table_type>/<id>", methods=["DELETE"])
def delete_record(table_type, id):
	response = {}
	response['status'] = db.deletePost(table_type, id)
	return jsonify(response), 200


if __name__ == "__main__":
	app.run(port=app.config['CONFIG_APPLICATION_PORT'])
