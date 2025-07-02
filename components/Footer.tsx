function Footer() {
  return (
    <div className="text-white text-center lg:hidden ">
      <hr className="bg-gray-600" />
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </div>
  );
}

export default Footer;
