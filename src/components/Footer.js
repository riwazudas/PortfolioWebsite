const Footer = ({ name }) => (
    <footer className="text-center text-gray-500 mt-16 md:mt-24">
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
    </footer>
);

export default Footer;