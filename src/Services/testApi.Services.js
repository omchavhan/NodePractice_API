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


module.exports.insertdata = (body) =>{
  const {Emp_ID,Emp_Name,Emp_Code,Emp_Phone,Dept_Name,Salary} = body
  return new Promise((resolve,reject)=>{
    insertResult = `
    INSERT INTO employee(Emp_ID,Emp_Name,Emp_Code,Emp_Phone,Dept_Name,Salary)
    VALUE('${Emp_ID}','${Emp_Name}','${Emp_Code}','${Emp_Phone}','${Dept_Name}','${Salary}')
    `
    conn.query(insertResult, (err, request)=>{
      err ?
          reject({ack: false, resCode: err.errno, errMsg: err.sqlMessage})
          :
          resolve({ack: true, resCode:1, msg: 'Your Record has been submitted Sucessfuly'})
    })
  })
}


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
