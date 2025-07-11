import { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
    return (
        <>
            <div className="mt-10 pt-6 border-t border-white/10 flex justify-center space-x-6" id="Contact">
              <SocialLinks />
            </div>
        </>
    );
}

export default ContactPage;