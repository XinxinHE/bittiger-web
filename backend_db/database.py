
import pymongo
from flask import Flask
from pymongo import MongoClient
from pymongo import ReturnDocument

import pprint
from bson.json_util import dumps

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

	def insertPost(self, table_type, data):
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

		if table_type == 'courses':
			id = self.course_table.find().count() + 1
		elif table_type == 'questions':
			id = self.question_table.find().count() + 1
		elif table_type == 'folders':
			id = self.folder_table.find().count() + 1
		else:
			return None

		if self.checkExist(table_type, id):
			return None

		if table_type == 'courses':
			data['cid'] = id
			post_id = self.course_table.insert_one(data)
		elif table_type == 'questions':
			data['qid'] = id
			post_id = self.question_table.insert_one(data)
		elif table_type == 'folders':
			data['fid'] = id
			post_id = self.folder_table.insert_one(data)

		return eval(dumps(data))
		

	def readPosts(self, table_type, attr=None):
		"""
		Input parameter: 
			table_type + s
			attr: attributes want to query along with user_id, must be a key value pair JSON
		Output parameter: 
			return all the data back

		Read data from DB with other attributes if exist. Return None if not exist.
		"""
		query_filter = {}
		if attr:
			attr_json = json.loads(attr)
			for key, value in attr_json:
				query_filter[key] = value

		data = None
		if table_type == 'courses':
			data = eval(dumps(self.course_table.find(query_filter), separators=(',', ':')))
		elif table_type == 'folders':
			data = eval(dumps(self.folder_table.find(query_filter), separators=(',', ':')))
		elif table_type == 'questions':
			data = eval(dumps(self.question_table.find(query_filter), separators=(',', ':')))
		else: 
			data['status'] = 'No matched data!'
        
		pprint.pprint(data)
		return data


	def readPost(self, table_type, id, attr=None):
		"""
		Input parameter: 
			user_id: string
			attr: attributes want to query along with user_id, must be a key value pair JSON
		Output parameter: 
			data associate with user_id

		Read data from DB by primary key user_id, and with other attributes if exist. Return None if not exist.
		"""
  		print("readPost!")
		if not self.checkExist(table_type, id):
			return False

		query_filter = {}
		if attr:
			attr_json = json.loads(attr);
			for key, value in attr_json:
				query_filter[key] = value

		data = None

		if table_type == 'courses':
			query_filter['cid'] = int(id)
			data = eval(dumps(self.course_table.find_one(query_filter), separators=(',', ':')))
		elif table_type == 'folders':
			query_filder['fid'] = int(id)
			data = eval(dumps(self.folder_table.find_one(query_filter), separators=(',', ':')))
		elif table_type == 'questions':
			query_filter['qid'] = int(id)
			data = eval(dumps(self.question_table.find_one(query_filter), separators=(',', ':')))
		else:
			data['status'] = 'No matched data!'

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
			return 'not exist'

		query_filter = {}
		if table_type == 'courses':
			query_filter['cid'] = int(id)
			self.course_table.remove(query_filter)
		elif table_type == 'folders':
			query_filter['fid'] = int(id)
			self.folder_table.remove(query_filter)
		elif table_type == 'questions':
			query_filter['cid'] = int(id)
			self.question_table.remove(query_filter)
		else:
			return 'No matched data!'
		
		return 'success'



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
			return None
		query_filter = {}
			
		input_data = {'$set': data}
		updated_data = None
		
		if table_type == 'courses':
			query_filter['cid'] = int(id)
			updated_data = self.course_table.find_one_and_update(query_filter, input_data, return_document=ReturnDocument.AFTER)
		elif table_type == 'folders':
			query_filter['fid'] = int(id)
			updated_data = self.folder_table.find_one_and_update(query_filter, input_data, return_document=ReturnDocument.AFTER)
		elif table_type == 'questions':
			query_filter['qid'] = int(id)
			updated_data = self.question_table.find_one_and_update(query_filter, input_data, return_document=ReturnDocument.AFTER)
		#print(id)
		#print(updated_data)
		#return eval(dumps(updated_data.raw_result))
		return eval(dumps(updated_data))


	def checkExist(self, table_type, id):
		""" 
		Input parameter: 
			user_id: string
		Output parameter: 
			boolean indicates if the user_id info exist or not

		Check if the document exist in DB or not. Ture means exist, false means no.
		"""

		if not id:
			return False

		query_filter = {}
		cnt = 0
		if table_type == 'courses':
			query_filter['cid'] = int(id)
			cnt = self.course_table.find(query_filter).count()
		elif table_type == 'folders':
			query_filter['fid'] = int(id)
			cnt = self.folder_table.find(query_filter).count()
		elif table_type == 'questions':
			query_filter['qid'] = int(id)
			cnt = self.question_table.find(query_filter).count()

		if (cnt > 0):
			return True

		return False
