
import pymongo
from flask import Flask
from pymongo import MongoClient

import datetime
import json

app = Flask(__name__)
app.config.from_envvar('ENV_CONFIG_FILE')
mongo_host = app.config['MONGO_HOST']
mongo_port = app.config['MONGO_PORT']

mongo_endpoint = mongo_host + ":" + str(mongo_port)


class DB():

	def __init__(self):
		#self.client = MongoClient('mongodb://localhost:27017/')
		self.client = MongoClient(mongo_endpoint)
		self.db = self.client.bittiger
		self.course_table = self.db.course_table
		self.folder_table = self.db.folder_table
		self.question_table = self.db.question_table

	def insertPost(self, table_type, id, data):
		"""
		Input parameter: 
			user_data: string, must be key value pair JSON
		Outout parameter: void
			Insert JSON data into MongoDB

		Converts input string to dictionary and insert it to the table.
		"""

		#print(data)
		#data2 = json.loads(data)
		#input_data = {}
		if self.checkExist(table_type, id):
			return False

		data['_id'] = id
		if table_type == 'course':
			data['course_id'] = id
			#print(data)
			post_id = self.course_table.insert_one(data)
		elif table_type == 'question':
			data['question_id'] = id
			post_id = self.question_table.insert_one(data)
		else:
			data['folder_id'] = id
			post_id = self.folder_table.insert_one(data)

		return True
		

	def readPost(self, table_type, id, attr=None):
		"""
		Input parameter: 
			user_id: string
			attr: attributes want to query along with user_id, must be a key value pair JSON
		Output parameter: 
			data associate with user_id

		Read data from DB by primary key user_id, and with other attributes if exist. Return None if not exist.
		"""

		if not self.checkExist(table_type, id):
			return None

		query_filter = {'_id': id}
		if attr:
			attr_json = json.loads(attr);
			for key, value in attr_json:
				query_filter[key] = value

		data = None
		if table_type == 'course':
			#query_filter['course_id'] = id
			data = self.course_table.find_one(query_filter)
		elif table_type == 'folder':
			#query_filter['folder_id'] = id
			data = self.folder_table.find_one(query_filter)
		else:
			#query_filter['question_id'] = id
			data = self.question_table.find_one(query_filter)

		return data

	def deletePost(self, table_type, id):
		"""
		Input parameter:
			user_id: string
		Output parameter: 
			void

		Remove a document from DB by user_id if user_id exist.
		"""
		if not self.checkExist(table_type, id):
			return

		query_filter = {'_id': id}
		if table_type == 'course':
			query_filter['course_id'] = id
			self.course_table.remove(query_filter)
		elif table_type == 'folder':
			query_filter['folder_id'] = id
			self.folder_table.remove(query_filter)
		else:
			query_filter['question_id'] = id
			self.question_table.remove(query_filter)

	def checkExist(self, table_type, id):
		""" 
		Input parameter: 
			user_id: string
		Output parameter: 
			boolean indicates if the user_id info exist or not

		Check if the document exist in DB or not. Ture means exist, false means no.
		"""
		query_filter = {'_id': id}
		cnt = 0
		if table_type == 'course':
			#print("hehe")
			cnt = self.course_table.find(query_filter).count()
			#print(cnt)
		elif table_type == 'folder':
			cnt = self.folder_table.find(query_filter).count()
		else:
			cnt = self.question_table.find(query_filter).count()

		if (cnt > 0):
			return True

		return False

	def update(self, table_type, id, data):
		"""
		Input parameter:
		user_id: string
		data: string, must be a kay value pair JSON
		Output parameter:
		boolean indicates if update is successful or not
		"""

		if not self.checkExist(table_type, id):
			#print("haha")
			return False
		query_filter = {}
		query_filter['_id'] = id
		input_data = {'$set': data}
		print(data)
		
		if table_type == 'course':
			#input_data['course_id'] = id
			self.course_table.update_one(query_filter, input_data)
		elif table_type == 'folder':
			#input_data['folder_id'] = id
			self.folder_table.update_one(query_filter, input_data)
		else:
			#input_data['question_id'] = id
			self.question_table.update_one(query_filter, input_data)

		return True
