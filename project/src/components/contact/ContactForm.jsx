import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import { validateEmail } from "../../utils/formUtils";
import axios from "axios";
import { toast } from "react-toastify"; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validateEmail(formData.email)) {
        throw new Error("Invalid email address");
      }

      setLoading(true); 

      const response = await axios.post("/contact", formData);

      if (response.status === 201) {
        toast.success("Message sent successfully!",{
          position: "bottom-right", 
          autoClose: 5000, 
          hideProgressBar: false, 
          closeOnClick: true, 

        }); 
        setFormData({ name: "", email: "", message: "" }); 
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again."); 
      console.error("Form submission error:", error);
    } finally {
      setLoading(false); 
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              label="Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea
              label="Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            />

            <Button
              type="submit"
              className={`bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white  hover:text-primary hover:border-primary transition-colors w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading} 
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
