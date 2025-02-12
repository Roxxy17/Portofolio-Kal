"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Informasi kontak
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 888 0614 7806",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kalilaatha8@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Balong Street, Sleman, Yogyakarta",
  },
];

const Contact = () => {
  // State untuk input form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi untuk mengirim email
  const sendEmail = async (e) => {
    e.preventDefault();

    // Validasi input sebelum mengirim
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.service ||
      !formData.message
    ) {
      alert("Harap isi semua bidang sebelum mengirim pesan.");
      return;
    }

    try {
      const response = await emailjs.send(
        "service_wgquiym", // Ganti dengan service_id EmailJS
        "template_kirx4pn", // Ganti dengan template_id EmailJS
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          service: formData.service,
          message: formData.message,
        },
        "FijQwZafoCPfmJhQH" // Ganti dengan user_id EmailJS
      );
      if (response.status === 200) {
        alert("Pesan berhasil dikirim!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          service: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Terjadi kesalahan, pesan gagal dikirim. Silakan coba lagi.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 px-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="xl:w-3/5 order-2 xl:order-none">
            <form
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-3xl md:text-4xl text-accent">
                Let&apos;s Work Together
              </h3>
              <p className="text-white/60">
                Silakan isi formulir di bawah ini untuk menghubungi saya.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="address"
                  placeholder="Your City"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select A Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Pilih Layanan</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Video Editor">Video Editor</SelectItem>
                    <SelectItem value="UI/UX Designer">
                      UI/UX Designer
                    </SelectItem>
                    <SelectItem value="Data Mining">Data Mining</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[150px]"
                name="message"
                placeholder="Type Your Message Here"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button size="lg" className="max-w-40" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-2xl md:text-3xl">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-lg">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;