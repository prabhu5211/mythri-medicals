

const FooterSection = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Tree. All rights reserved.</p>
        <div className="mt-4">
          <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
