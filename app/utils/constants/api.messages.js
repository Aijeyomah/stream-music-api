export default {
  SUCCESS_RESPONSE: 'Request was successfully processed',
  SUCCESS: 'success',
  LOGIN_USER_SUCCESSFULLY: 'login successful',
  INTERNAL_SERVER_ERROR: 'Oops, something broke on the server!!!',
  NOT_FOUND_API: 'Oops, You have reached a dead end',
  INVALID_PERMISSION:
    'Permission denied. Current user does not have the required permission to access this resource.',
  AUTH_REQUIRED: 'Access denied,a valid access token is required',
  DATA_CONFLICT: (field) => `A user with your ${field} already exists`,
  DB_ERROR: 'A database error occurred, either in redis or postgres',
  MODULE_ERROR: 'A module error occurred',
  INVALID_ROLE_PARAMETER: 'Invalid role value',
  REDIS_RUNNING: 'Redis server is running',
  STREAM_RUNNING: 'smart stream is running on port',
  MODULE_ERROR_STATUS: 'MODULE_PROCESS_BROKE',
  DB_ERROR_STATUS: 'DB_PROCESS_FAILED',
  WELCOME: 'welcome to smart stream',
  FAIL: 'fail',
  CREATE_USER_SUCCESSFULLY: 'Create a user successfully', 
  LOGIN_USER_FAILED: 'error login in', 
  CREATE_USER_FAILED: 'Error registering user',
  USER_DATA_EXIST_VERIFICATION_FAIL_MSG:(field) => `Error verifying existence of ${field}, try again.`,
  INVALID_CREDENTIALS: 'invalid login credentials',
  CREATE_POST_SUCCESSFULLY: 'Post created successfully',
  ERROR_CREATING_POST: 'Error creating post'

  
};