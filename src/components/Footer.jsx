const Footer = () => {
    return (
        <div className="bg-gray-100 py-5 mt-10 flex justify-center">
            <div>
                <p>
                    &copy; {new Date().getFullYear()} Pritam Bag
                    <span> All Rights Reserved</span>
                </p>
            </div>
        </div>
    );
};

export default Footer;