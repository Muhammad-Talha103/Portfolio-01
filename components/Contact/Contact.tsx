"use client"

import React, { useEffect, useState } from "react"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Form from './Form'
import Container from "@/shared/Container"

const Contact = () => {
  const [showContact, setShowContact] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContact(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="bg-gray-100">

    <Container className=" relative py-10">
      <AnimatePresence>
        {showContact && (
          <motion.div
            className="flex flex-col md:flex-row gap-8 bg-gray-100 items-center justify-between xs:px-3 md:px-12 py-8 md:py-16 rounded-lg shadow-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="w-full md:w-[60%]" variants={itemVariants}>
              <Form />
            </motion.div>
            <motion.div className="w-full md:w-[40%] flex flex-col gap-6" variants={itemVariants}>
              <motion.div className="flex gap-3 items-start" variants={itemVariants}>
                <FaPhoneAlt size={20} className="text-main mt-2" />
                <div className="flex flex-col">
                  <p className="font-semibold uppercase text-sm">Phone:</p>
                  <Link href="tel:+923173940407">
                    <p className="text-[17px] font-semibold hover:text-main">
                      +92 317-3940407
                    </p>
                  </Link>
                </div>
              </motion.div>
              <motion.div className="flex gap-3 items-start" variants={itemVariants}>
                <MdEmail size={20} className="text-main mt-2" />
                <div className="flex flex-col">
                  <p className="font-semibold uppercase text-sm">Email:</p>
                  <Link href="mailto:talhagp908@gmail.com">
                    <p className="text-[17px] font-semibold hover:text-main">
                      talhagp908@gmail.com
                    </p>
                  </Link>
                </div>
              </motion.div>
              <motion.div className="flex gap-3 items-start" variants={itemVariants}>
                <FaLocationDot size={20} className="text-main mt-2" />
                <div className="flex flex-col">
                  <p className="font-semibold uppercase text-sm">Address:</p>
                  <p className="text-[17px] font-semibold uppercase">
                    Hyderabad Sindh
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
    </div>
  )
}

export default Contact