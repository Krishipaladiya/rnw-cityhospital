import React, { useRef } from 'react'

const Appointment = () => {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const dateRef = useRef(null)
  const departmentRef = useRef(null)
  const doctorRef = useRef(null)
  const msgRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value, emailRef.current.value, phoneRef.current.value, dateRef.current.value, departmentRef.current.value, doctorRef.current.value, msgRef.current.value);
    nameRef.current.style.backgroundColor = "red"
    emailRef.current.focus()
  }

  return (
    <>
      <section id="appointment" className="appointment section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Make an Appointment</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <form action="forms/appointment.php" method="post" className="php-email-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" ref={nameRef} />
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" ref={emailRef} />
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" ref={phoneRef} />
                <div className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <input type="datetime-local" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" ref={dateRef} />
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3">
                <select name="department" id="department" className="form-select" ref={departmentRef}>
                  <option value>Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </select>
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3">
                <select name="doctor" id="doctor" className="form-select" ref={doctorRef}>
                  <option value>Select Doctor</option>
                  <option value="Doctor 1">Doctor 1</option>
                  <option value="Doctor 2">Doctor 2</option>
                  <option value="Doctor 3">Doctor 3</option>
                </select>
                <div className="validate" />
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" ref={msgRef} />
              <div className="validate" />
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
            </div>
            <div className="text-center">
              <button type="submit">Make an Appointment</button></div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Appointment
