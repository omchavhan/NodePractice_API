const { request } = require('express')
const conn = require('../../config/db.config')

module.exports.getReturn = () => {
  return new Promise((resolve, reject) => {
      //DB Query
    const Query = `SELECT * FROM employee`
    console.log(Query)
    conn.query(Query,(getErr, getRow)=>{
      if(getErr){
        reject({
          ack:-1,
          data:'error'
        })
      }else{
        resolve({
          ack:1,
          data:getRow
        })
      }
    })
  })
}


//use two params
module.exports.getReturn_signin = (Mail_Id,Password) => {
  console.log("This is final Mail_Id", Mail_Id)
  console.log("This is final Password", Password)
  return new Promise((resolve, reject) => {
      //DB Query
    const Query = `SELECT * FROM signup WHERE Mail_Id = '${Mail_Id}' And Password = '${Password}'`
    console.log(Query)
    conn.query(Query,(getErr, getRow)=>{
      if(getErr){
        reject({
          ack:-1,
          data:'error'
        })
      }else{
        resolve({
          ack:1,
          data:getRow
        })
      }
    })
  })

}



module.exports.login_signup = (body) =>{
  console.log(body)
  const {mailid,password} = body    //html for name usegit  
  return new Promise((resolve,reject)=>{
    insertResult = `
          INSERT INTO signup(FullName,Mobile_No,Mail_Id,Password,Com_Password)
          VALUE('${mailid}','${password}')
          `
    conn.query(insertResult, (err, request)=>{
      err ?
          reject({ack: false, resCode: err.errno, errMsg: err.sqlMessage})
          :
          resolve({ack: true, resCode:1, msg: 'Your Record has been submitted Sucessfuly'})
    })
  })
}




module.exports.getCommentslist = () => {
  return new Promise((resolve, reject) => {
      //DB Query
    const Query = `SELECT * FROM commentslist`
    console.log(Query)
    conn.query(Query,(getErr, getRow)=>{
      if(getErr){
        reject({
          ack:-1,
          data:'error'
        })
      }else{
        resolve({
          ack:1,
          data:getRow
        })
      }
    })
  })
}




module.exports.getReturntoid = (Emp_ID) => {
  return new Promise((resolve, reject) => {
    //DB Query
    const Query = `SELECT * FROM employee WHERE Emp_ID = '${Emp_ID}'`
    console.log(Query)
    conn.query(Query,(getErr, getRow)=>{
      if(getErr){
        reject({
          ack:-1,
          data:'error'
        })
      }else{
        resolve({
          ack:1,
          data:getRow
        })
      }
    })
  })
}

module.exports.deletedata = (Emp_ID) =>{
  return new Promise ((resolve,reject) => {
    const Query = `DELETE FROM employee WHERE Emp_ID = '${Emp_ID}'`
    console.log(Query)
    conn.query(Query,(getErr, getRow)=> {
      if(getErr){
        reject({
          act:-1,
          data:'error',
          msg:'worng data!'
        })
      }else{
        resolve({
          ack:1,
          data:getRow,
          msg:'Delete data!'
        })
      }
    })
  })
}


module.exports.insertdata_commentlist = (body) =>{
  console.log(body)
  const {fname,subject1} = body    //html for name usegit  
  return new Promise((resolve,reject)=>{
    insertResult = `
    INSERT INTO commentslist(Name,Comments)
    VALUE('${fname}','${subject1}')  
    `
    conn.query(insertResult, (err, request)=>{
      err ?
          reject({ack: false, resCode: err.errno, errMsg: err.sqlMessage})
          :
          resolve({ack: true, resCode:1, msg: 'Your Record has been submitted Sucessfuly'})
    })
  })
}



module.exports.insertdata_signup = (body) =>{
  console.log(body)
  const {fullname,mobno,mailid,password,compassword} = body    //html for name usegit  
  return new Promise((resolve,reject)=>{
    insertResult = `
          INSERT INTO signup(FullName,Mobile_No,Mail_Id,Password,Com_Password)
          VALUE('${fullname}','${mobno}','${mailid}','${password}','${compassword}')
          `
    conn.query(insertResult, (err, request)=>{
      err ?
          reject({ack: false, resCode: err.errno, errMsg: err.sqlMessage})
          :
          resolve({ack: true, resCode:1, msg: 'Your Record has been submitted Sucessfuly'})
    })
  })
}



// module.exports.insertdata_signup = (body) =>{
//   console.log(body)
//   if(body.Form_Type == 'Sign_Up'){
//     const {fullname,mobno,mailid,password,compassword} = body
//     return new Promise((resolve,reject)=>{
//       insertResult = `
//       INSERT INTO signup(FullName,Mobile_No,Mail_Id,Password,Com_Password)
//       VALUE('${fullname}','${mobnox}','${mailid}','${password}','${compassword}')
//       `
//       conn.query(insertResult, (err, request)=>{
//         err ?
//             reject({ack: false, resCode: err.errno, errMsg: err.sqlMessage})
//             :
//             resolve({ack: true, resCode:1, msg: 'Your Record has been submitted Sucessfuly'})
//       })
//     })
//   }else{
//     const {mailid,password} = body
//     return new Promise((resolve,reject)=>{
//       checkUser = `
//       INSERT INTO signup(Mail_Id,Password)
//       VALUE('${mailid}','${password}')
//       `
//       conn.query(checkUser, (err, request)=>{
//         err ?
//             reject({ack: false, resCode: err.errno, errMsg: err.sqlMessage}) 
//             :
//         request.length == 0 ?
//             reject({ack: false, resCode: -1, errMsg: 'No user found'})
//             :
//             resolve({ack: false, resCode: 1, errMsg: 'User data found', data:request})

//       })
//     })
//   }
  
// }




module.exports.updatedatatoid = (Emp_ID,body) =>{
  const {Emp_Name,Emp_Code,Emp_Phone,Dept_Name,Salary} = body
  return new Promise((resolve,reject)=>{
    insertResult = `
    UPDATE employee SET Emp_Name = '${Emp_Name}', Emp_Code = '${Emp_Code}', Emp_Phone = '${Emp_Phone}', Dept_Name = '${Dept_Name}', Salary = '${Salary}'
    WHERE Emp_ID = '${Emp_ID}'`
    conn.query(insertResult, (err, request)=>{
      err ?
          reject({ack: false, resCode: err.errno, errMsg: err.sqlMessage})
          :
          resolve({ack: true, resCode:1, msg: 'Your Record has been updated Sucessfuly'})
    })
  })
}



module.exports.updatedata = (body) =>{
  // const {Emp_ID, Emp_Name,Emp_Code,Emp_Phone,Dept_Name,Salary} = body
  return new Promise((resolve,reject)=>{
    updateResult = `
    UPDATE employee SET Emp_Name = '${body.Emp_Name}', Emp_Code = '${body.Emp_Code}', Emp_Phone = '${body.Emp_Phone}', 
    Dept_Name = '${body.Dept_Name}', Salary = '${body.Salary}'
    WHERE Emp_ID = '${body.Emp_ID}'`
    conn.query(updateResult, (err, request)=>{
      err ?
          reject({ack: false, resCode: err.errno, errMsg: err.sqlMessage})
          :
          resolve({ack: true, resCode:1, msg: 'Your Record has been updated Sucessfuly'})
    })
  })
}





// --------------------------------------------------------------------------------------------------------

module.exports.getLogin = (email_id) => {
  return new Promise((resolve, reject) => {
      //DB Query
    const Query = `SELECT * FROM tb_candidate_account_master WHERE email_id = '${email_id}'`
    console.log(Query)
    conn.query(Query,(err, request)=>{
      if (err) {
        reject({ ack: false, resCode: err.errno, errMsg: err.sqlMessage });
      } else if(request.length == 0){
        reject({ ack: false, resCode: -1, errMsg: 'no data found' });
      } else {
        resolve({ ack: true, resCode: 1, msg: 'Data Returned!', Data: request });
      }
    })
  })
}

//select query use in post method
module.exports.login = (body) => {
  console.log(body);
  const { mailid,password } = body;
  return new Promise((resolve, reject) => {
    const Query = `SELECT * FROM signup WHERE Mail_Id = '${mailid}' AND Password = '${password}'`
    console.log(Query)
    conn.query(Query,(err, request) => {
      if (err) {
        reject({ ack: false, resCode: err.errno, errMsg: err.sqlMessage });
      } else if(request.length == 0){
        reject({ ack: false, resCode: -1, errMsg: 'no data found' });
      } else {
        resolve({ ack: true, resCode: 1, msg: 'Data Returned!', Data: request });
      }
    });
  });
};



module.exports.requirement_profile= (body) =>{
  console.log(body)
  const {name,email_id,phone_no,job_title,experience,upload_cv} = body    //html for name usegit  
  return new Promise((resolve,reject)=>{
    insertResult =`
            INSERT INTO requirement(name,email_id,phone_no,job_title,experience,upload_cv)
            VALUE('${name}','${email_id}','${phone_no}','${job_title}','${experience}','${upload_cv}')
            `
    conn.query(insertResult, (err, request)=>{
      err ?
          reject({ack: false, resCode: err.errno, errMsg: err.sqlMessage})
          :
          resolve({ack: true, resCode:1, msg: 'Your Record has been submitted Sucessfuly'})
    })
  })
}

module.exports.que_video_upload = (body) =>{
  console.log(body)
  const {que_data,video_data} = body
  return new Promise((resolve,reject)=>{
    insertResult = `
              INSERT INTO fl_que(que_data,video_data)
              VALUE('${que_data}','${video_data}')
            `

    conn.query(insertResult,(err, request)=>{
      err ?
      reject({ack: false, resCode: err.errno, errMsg: err.sqlMessage})
      :
      resolve({ack: true, resCode:1, msg: 'Your Record has been submitted Sucessfuly'})
    })
  })
}


// Blog form insert api -
module.exports.blogform_insert = (body) =>{
  console.log(body)
  return new Promise((resolve,reject)=>{
    insertResult = `
          INSERT INTO blogs(blog_title,blog_content,author,image_url)
          VALUE('${body.title}','${body.content}','${body.authorr}','${body.filename}')
          `
    conn.query(insertResult, (err, request)=>{
      err ?
          reject({ack: false, resCode: err.errno, errMsg: err.sqlMessage})
          :
          resolve({ack: true, resCode:1, msg: 'Your Record has been submitted Sucessfuly'})
    })
  })
}


// Get Api For Blog Data
module.exports.getBlogs = () => {
  return new Promise((resolve, reject) => {
      //DB Query
    const Query = `SELECT * FROM blogs ORDER BY blog_id DESC`
    console.log(Query)
    conn.query(Query,(getErr, getRow)=>{
      if(getErr){
        reject({
          ack:-1,
          data:'error'
        })
      }else{
        getRow.map(e => e.image_url = `http://localhost:4000/${e.image_url}`)
        console.log(getRow)
        resolve({
          ack:1,
          data:getRow
        })
      }
    })
  })
}