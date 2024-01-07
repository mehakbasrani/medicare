import React from 'react'

const Contact = () => {
  return (
   <section className="px-4 mx-auto max-w-screen-md">
     <h2 className="heading text-center">Contact Us</h2>
     <p className="mb-8 lg:mb-16 font-light text-center text_para">
       Got a technical issue? Want to send feedback about beta feature? Let us Know
     </p>

     <form action="#" className="space-y-0">
      <div className="pt-6">
        <label htmlFor="email" className="form_label">
          Your Email
        </label>
        <input type="email"
          id="email"
          placeholder="example@gmail.com"
          className="form_input mt-1" />
      </div>

      <div className="pt-6">
        <label htmlFor="subject" className="form_label">
          Subject
        </label>
        <input type="text"
          id="subject"
          placeholder="Let us know how can we help you"
          className="form_input mt-1" />
      </div>

      <div className="pt-6">
        <label htmlFor="message" className="form_label">
          Your Message
        </label>
        <textarea type="text"
        rows="6"
          id="mmessage"
          placeholder="Leave a comment..."
          className="form_input mt-1" />
      </div>
      <div>
      <button type="submit" className="btn mt-8 rounded sm:w-fit">
        Submit
      </button>
      </div>
     </form>
   </section>
  )
}

export default Contact
