import {useState} from 'react';
import {
    BookOpen, Facebook, GraduationCap, Instagram, Linkedin as LinkedIn, Mail, MapPin, Menu, Phone, Twitter, Users, X
} from 'lucide-react';
import imgLogo from './rm.png';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('primary');

    const academics = {
        primary: {
            title: 'Primary School',
            description: 'Grades 1-5 focusing on foundational learning and character development.',
            subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Arts & Crafts']
        }, middle: {
            title: 'Middle School',
            description: 'Grades 6-8 emphasizing critical thinking and personal growth.',
            subjects: ['Advanced English', 'Pre-Algebra', 'Life Sciences', 'World History', 'Technology']
        }, high: {
            title: 'High School',
            description: 'Grades 9-12 preparing students for higher education and beyond.',
            subjects: ['Literature', 'Calculus', 'Physics', 'Economics', 'Computer Science']
        }
    };

    return (<div className="min-h-screen bg-light">
            {/* Header */}
            <header className="bg-primary text-light">
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img
                                src={imgLogo}
                                alt="School Logo"
                                className="h-32 w-auto"
                            />
                            <span className="ml-3 text-xl font-serif">St. G. D Convent School</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="hover:text-accent transition-colors">Home</a>
                            <a href="#about" className="hover:text-accent transition-colors">About</a>
                            <a href="#academics" className="hover:text-accent transition-colors">Academics</a>
                            <a href="#admissions" className="hover:text-accent transition-colors">Admissions</a>
                            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
                            <button
                                className="bg-accent text-primary px-6 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                                Enroll Now
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (<div className="md:hidden mt-4 space-y-4">
                            <a href="#home" className="block hover:text-accent transition-colors">Home</a>
                            <a href="#about" className="block hover:text-accent transition-colors">About</a>
                            <a href="#academics" className="block hover:text-accent transition-colors">Academics</a>
                            <a href="#admissions" className="block hover:text-accent transition-colors">Admissions</a>
                            <a href="#contact" className="block hover:text-accent transition-colors">Contact</a>
                            <button
                                className="w-full bg-accent text-primary px-6 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                                Enroll Now
                            </button>
                        </div>)}
                </nav>
            </header>

            {/* Hero Section */}
            <section id="home" className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">
                                Nurturing Minds, Building Futures
                            </h1>
                            <p className="text-lg text-gray-700 mb-8">
                                Where tradition meets excellence in education, shaping tomorrow's leaders today
                            </p>
                            <button
                                className="bg-secondary text-light px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                                Discover More
                            </button>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src={imgLogo}
                                alt="School Logo"
                                className="rounded-lg shadow-xl max-w-md mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-light">
                <div className="container mx-auto px-6">
                    <h2 className="font-serif text-4xl text-center text-primary mb-16">About Us</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <BookOpen size={48} className="mx-auto mb-4 text-secondary"/>
                            <h3 className="font-serif text-2xl mb-4">Our Mission</h3>
                            <p className="text-gray-700">
                                To provide holistic education that balances academic excellence with moral values
                            </p>
                        </div>
                        <div className="text-center">
                            <Users size={48} className="mx-auto mb-4 text-secondary"/>
                            <h3 className="font-serif text-2xl mb-4">Our Vision</h3>
                            <p className="text-gray-700">
                                To nurture responsible citizens rooted in values and equipped for future challenges
                            </p>
                        </div>
                        <div className="text-center">
                            <GraduationCap size={48} className="mx-auto mb-4 text-secondary"/>
                            <h3 className="font-serif text-2xl mb-4">Our Values</h3>
                            <p className="text-gray-700">
                                Excellence, Integrity, Discipline, and Innovation guide our educational approach
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academics Section */}
            <section id="academics" className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <h2 className="font-serif text-4xl text-center text-primary mb-16">Academic Programs</h2>

                    <div className="flex justify-center mb-8">
                        <div className="inline-flex rounded-md shadow-sm">
                            {Object.keys(academics).map((level) => (<button
                                    key={level}
                                    className={`px-6 py-3 text-sm font-medium first:rounded-l-lg last:rounded-r-lg ${activeTab === level ? 'bg-primary text-light' : 'bg-light text-primary hover:bg-gray-50'}`}
                                    onClick={() => setActiveTab(level)}
                                >
                                    {academics[level].title}
                                </button>))}
                        </div>
                    </div>

                    <div className="bg-light rounded-lg shadow-xl p-8">
                        <h3 className="font-serif text-2xl mb-4">{academics[activeTab].title}</h3>
                        <p className="text-gray-700 mb-6">{academics[activeTab].description}</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {academics[activeTab].subjects.map((subject, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg border border-accent">
                                    <span className="font-medium text-primary">{subject}</span>
                                </div>))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-light">
                <div className="container mx-auto px-6">
                    <h2 className="font-serif text-4xl text-center text-primary mb-16">Contact Us</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="mb-8">
                                <h3 className="font-serif text-2xl mb-6">Get in Touch</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <MapPin className="text-secondary mr-4"/>
                                        <span>123 Education Lane, Knowledge City</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="text-secondary mr-4"/>
                                        <span>+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="text-secondary mr-4"/>
                                        <span>admissions@gdconvent.edu</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl mb-6">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-primary hover:text-secondary">
                                        <Facebook size={24}/>
                                    </a>
                                    <a href="#" className="text-primary hover:text-secondary">
                                        <Twitter size={24}/>
                                    </a>
                                    <a href="#" className="text-primary hover:text-secondary">
                                        <Instagram size={24}/>
                                    </a>
                                    <a href="#" className="text-primary hover:text-secondary">
                                        <LinkedIn size={24}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-light px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-primary text-light py-12">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <img
                                src={imgLogo}
                                alt="School Logo"
                                className="h-16 w-auto mb-4"
                            />
                            <p className="text-sm">
                                Nurturing minds, building character, and shaping futures since 1995
                            </p>
                        </div>
                        <div>
                            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#home" className="hover:text-accent">Home</a></li>
                                <li><a href="#about" className="hover:text-accent">About</a></li>
                                <li><a href="#academics" className="hover:text-accent">Academics</a></li>
                                <li><a href="#admissions" className="hover:text-accent">Admissions</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-serif text-lg mb-4">Programs</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-accent">Primary School</a></li>
                                <li><a href="#" className="hover:text-accent">Middle School</a></li>
                                <li><a href="#" className="hover:text-accent">High School</a></li>
                                <li><a href="#" className="hover:text-accent">Extra-Curricular</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-serif text-lg mb-4">Connect</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-accent">
                                    <Facebook size={20}/>
                                </a>
                                <a href="#" className="hover:text-accent">
                                    <Twitter size={20}/>
                                </a>
                                <a href="#" className="hover:text-accent">
                                    <Instagram size={20}/>
                                </a>
                                <a href="#" className="hover:text-accent">
                                    <LinkedIn size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
                        <p>&copy; 2025 St. G. D Convent School. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>);
}

export default App;