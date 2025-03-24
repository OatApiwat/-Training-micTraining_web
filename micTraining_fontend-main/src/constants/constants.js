// App_Init
export const APP_INIT = "APP_INIT";
export const APP_TITLE = "Purchase webboard";

// Login Page
export const HTTP_LOGIN_FETCHING = "HTTP_LOGIN_FETCHING";
export const HTTP_LOGIN_SUCCESS = "HTTP_LOGIN_SUCCESS";
export const HTTP_LOGIN_FAILED = "HTTP_LOGIN_FAILED";
export const HTTP_LOGIN_ALERTED = "HTTP_LOGIN_ALERTED";

// USER
export const HTTP_USER_FETCHING = "HTTP_USER_FETCHING";
export const HTTP_USER_SUCCESS = "HTTP_USER_SUCCESS";
export const HTTP_USER_FAILED = "HTTP_USER_FAILED";
export const HTTP_USER_ALERTED = "HTTP_USER_ALERTED";

// Error Code
export const E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR =
  "E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR";
export const E_PERMISSION_MISSING = "E_PERMISSION_MISSING";
export const E_PICKER_NO_CAMERA_PERMISSION = "E_PICKER_NO_CAMERA_PERMISSION";
export const E_USER_CANCELLED = "E_USER_CANCELLED";
export const E_UNKNOWN = "E_UNKNOWN";
export const E_DEVELOPER_ERROR = "E_DEVELOPER_ERROR";
export const TIMEOUT_NETWORK = "ECONNABORTED"; // request service timeout
export const NOT_CONNECT_NETWORK = "NOT_CONNECT_NETWORK";

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE =
  "Cannot connect to server, Please try again.";
export const NETWORK_TIMEOUT_MESSAGE =
  "A network timeout has occurred, Please try again.";
export const UPLOAD_PHOTO_FAIL_MESSAGE =
  "An error has occurred. The photo was unable to upload.";

//export const apiUrl = "http://localhost:2006/MICTraining/";  //ip,port ที่ Deploy (backend running)
//export const imageUrl = "http://localhost:2006/";

// export const apiUrl = "http://10.121.1.123:2006/MICTraining/";   //Deploy backend
export const apiUrl = "http://192.168.0.125:2006/MICTraining/";   //Deploy backend
//export const imageUrl = "http://10.121.1.123:2006/";

export const YES = "YES";
export const NO = "NO";
export const OK = "ok";
export const NOK = "nok";


export const server = {
  LOGIN_URL: `authen/login`,
  USER_URL: `manage_user/user`,
  ChangePW_URL :`manage_user/change_password` ,
  DivisionURL: `DivisionMaster/divisionMaster`,
  CourseMasterURL: `CourseMaster/courseMaster`,
  UPLOAD_Data : `History/upload`,
  NewregisterURL : `NewTrainee/newRegister`,
  courseName_URL : `History/courseName`,
  RecordHistory_URL : `History/recordedHistory`, // get all data to History Table
  SelectList_URL : `History/Selectlist`,
  Selectlist_new_URL : `History/Selectlist_new`,
  RFID_Registered_URL : `History/RFID_Registered`, 
  CHECKIN_URL : `History/Registered`,
  byTTLchart_URL : `History/ToTal`, //Total กราฟ 
  byCourse_URL : `History/byCourse`,
  byQuarter_URL : `History/data`,
	date_stack: `History/date`,
  renterTable : `History/renderTable` ,

  SearchEmp_URL : `evaluate/searchEmp` ,
  FileDetail_URL : `evaluate/FileDetail` ,
  getfile_URL : `job_file/showFile`,
  fileImage : `job_file/File`,
  show_id : `job_file/showid`,
  VideoFile_URL : `video/VideoUpload` , 

  //level 
  level_URL : `criterial_level/level`,
  sort_courseName_URL : `criterial_level/sort_courseName`,
  General_emp : `criterial_level/General_emp`, // Genaral level
  search_Dev_emp : `criterial_level/Developer_emp`,
  General_emp_Chart : `criterial_level/General_emp_Chart`,
  General_emp_Tb :  `criterial_level/General_emp_Tb`,

  Dev_emp_Chart : `criterial_level/Dev_emp_Chart`,  //Dev level
  Dev_emp_Tb : `criterial_level/Dev_emp_Tb`,  //Dev level
  check_Dev_list : `criterial_level/check_Dev`, 
  Level_ratio : `criterial_level/Level_ratio`,
  Level_ratio1 : `criterial_level/Level_ratio1`,
// ตารางplan 
  TRAINING_MONTHLY_PLAN: `training_plan/calendar_monthly_plan`,
  TRAINING_CHECK_PLAN: `training_plan/check_plan`,
  TRAINING_PLAN_DELETE: `training_plan/delete`,
  TRAINING_PLAN_ADD: `training_plan/add`,

  TRAINING_MONTHLY_ACTUAL: `training_actual/calendar_monthly_actual`,
  TRAINING_CHECK_ACTUAL: `training_actual/check_actual`,
  TRAINING_ACTUAL_DELETE: `training_actual/delete`,
  TRAINING_ACTUAL_ADD: `training_actual/add`,

  TRAINING_LIST_REV: `training_plan/list_rev`,
  TRAINING_ACTUAL_COPY: `training_actual/copy`,
  TRAINING_PLAN_COPY: `training_plan/copy`,
  TRAINING_DELETE_LOG: `training_delete/add`,
  TRAINING_SHOW_LOG: `training_delete/log`,

  // EditPlan_URL : `video/VideoUpload` , 
};

export const key = {
  LOGIN_PASSED: `LOGIN_PASSED`,
  USER_LV: `USER_LV`,
  USER_NAME: "USER_NAME",
  USER_EMP: "USER_EMP",
  TIME_LOGIN: "TIME_LOGIN",
};
