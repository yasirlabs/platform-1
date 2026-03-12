/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState, useEffect, useMemo, FormEvent } from "react";
import { 
  Routes, 
  Route, 
  Link, 
  useNavigate, 
  useParams, 
  useLocation,
  useSearchParams 
} from "react-router-dom";
import { 
  BookOpen, 
  Award, 
  Users, 
  ChevronRight, 
  Star, 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram,
  Layout,
  Code,
  Terminal,
  ArrowRight,
  Search,
  Play,
  CheckCircle,
  Download,
  Settings,
  LogOut,
  User as UserIcon,
  Plus,
  Trash2,
  Edit,
  Mail,
  Phone,
  MessageSquare,
  Lock,
  Eye,
  EyeOff,
  Filter,
  Clock,
  BarChart
} from "lucide-react";
import { COURSES, TRAINERS, BLOG_POSTS, MOCK_USER } from "./data";
import { Course, User, Trainer, BlogPost, Lesson } from "./types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const user = MOCK_USER; // Mocking logged in user

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${searchQuery}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <Link to="/" className="text-2xl font-bold text-brand-coral">LearnX</Link>
        
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <form onSubmit={handleSearch} className="relative w-full">
            <input 
              type="text" 
              placeholder="Search courses, trainers..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral/20 focus:border-brand-coral transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </form>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-brand-coral transition-colors">Home</Link>
          <Link to="/courses" className="hover:text-brand-coral transition-colors">Courses</Link>
          <Link to="/blog" className="hover:text-brand-coral transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-brand-coral transition-colors">Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-sm font-medium text-gray-600 hover:text-brand-coral transition-colors">Dashboard</Link>
              <Link to="/profile">
                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-brand-coral/20" />
              </Link>
            </div>
          ) : (
            <>
              <Link to="/register" className="px-6 py-2 bg-brand-coral text-white rounded-full text-sm font-medium hover:bg-brand-coral/90 transition-all shadow-md shadow-brand-coral/20">
                Register
              </Link>
              <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-brand-coral transition-colors">
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative bg-brand-pink overflow-hidden rounded-[3rem] mx-4 md:mx-10 mt-4">
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Learning new <span className="text-brand-coral">Skills</span> <br />
          online is now much <br />
          <span className="text-brand-coral">easier</span> with us
        </motion.h1>
        <p className="text-gray-600 mb-8 max-w-md">
          We believe in skills over knowledge. Each of the services in this platform is focused on nourishing your skills.
        </p>
        <button className="px-8 py-3 bg-brand-coral text-white rounded-full font-medium hover:bg-brand-coral/90 transition-all shadow-lg shadow-brand-coral/30 flex items-center group">
          Enroll now
          <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 inline-flex items-center bg-white p-3 rounded-2xl shadow-sm border border-brand-coral/10"
        >
          <div className="w-8 h-8 bg-brand-coral/10 rounded-full flex items-center justify-center mr-3 text-brand-coral">
            <Star className="w-4 h-4 fill-current" />
          </div>
          <span className="text-xs font-medium text-gray-700">Grab best offers on courses now</span>
        </motion.div>
      </div>
      
      <div className="md:w-1/2 mt-12 md:mt-0 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
            alt="Student" 
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Active Students</p>
                <p className="text-sm font-bold">250 +</p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-coral/5 rounded-full blur-3xl -z-10" />
      </div>
    </div>
  </section>
);

const AreasOfInvolvement = () => {
  const areas = [
    { title: "Courses", icon: BookOpen, desc: "Access prerecorded budget online courses by professionals. Build skills that work for you." },
    { title: "Certification", icon: Award, desc: "Certify your skills with LearnX competitive platform, where you will be certified based on your exam performance." },
    { title: "Industrial Training", icon: Users, desc: "We think a practical approach of a typical course, we offer Industrial Training programs." }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Areas of <span className="text-brand-coral">involvement</span></h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          We at LearnX provide you different kind of areas of involvement and bring your future at the top.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {areas.map((area, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl border border-gray-100 hover:border-brand-coral/20 hover:shadow-xl hover:shadow-brand-coral/5 transition-all bg-white text-center"
          >
            <div className="w-16 h-16 bg-brand-pink rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-coral">
              <area.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">{area.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Mentorship = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <img 
          src="https://res.cloudinary.com/dvx6nsrd9/image/upload/v1773343316/team_stbrev.png" 
          alt="Mentorship" 
          className="rounded-[2.5rem] shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We provide best <br />
          <span className="text-brand-coral text-4xl md:text-5xl">1-on-1 Mentorship</span>
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Placements are near? No worry LearnX will prepare you with Graph Algorithms, Backtracking, etc. that will give you a forward push towards your dream job. And make your future bright, we at LearnX provide you the best mentorship program.
        </p>
        <button className="px-8 py-3 bg-brand-coral text-white rounded-full font-medium hover:bg-brand-coral/90 transition-all shadow-lg shadow-brand-coral/30">
          Know more
        </button>
      </div>
    </div>
  </section>
);

const MasteryBundles = () => {
  const bundles = [
    { title: "Graphic Design", icon: Layout, color: "bg-blue-50 text-blue-500" },
    { title: "Web Development", icon: Code, color: "bg-purple-50 text-purple-500" },
    { title: "Mastery in Python", icon: Terminal, color: "bg-orange-50 text-orange-500" }
  ];

  return (
    <section className="py-20 bg-brand-pink/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Discover our all new <br /> <span className="text-brand-coral">mastery bundle</span></h2>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-colors">
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-full bg-brand-coral text-white flex items-center justify-center hover:bg-brand-coral/90 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bundles.map((bundle, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <div className={`w-14 h-14 ${bundle.color} rounded-2xl flex items-center justify-center mb-6`}>
                <bundle.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">{bundle.title}</h3>
              <p className="text-gray-400 text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
              <div className="flex items-center space-x-2 mb-8">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-6 h-6 bg-gray-100 rounded-lg" />)}
              </div>
              <button className="w-full py-3 bg-brand-coral text-white rounded-xl font-medium hover:bg-brand-coral/90 transition-all">
                Enroll
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-20 max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6">Check what our <br /> <span className="text-brand-coral">students say...</span></h2>
        <p className="text-gray-500 mb-8">
          LearnX is the best platform for learning. I'm glad that I enrolled with it. Its design course and its faculty are very nice. I am a master in design now.
        </p>
        <div className="flex items-center space-x-4">
          <img src="https://i.pravatar.cc/150?u=2" className="w-12 h-12 rounded-full border-2 border-brand-coral" referrerPolicy="no-referrer" />
          <div>
            <p className="font-bold">Sarah Jenkins</p>
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand-pink p-10 rounded-[3rem] relative">
        <div className="absolute -top-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 max-w-xs">
          <p className="text-sm text-gray-600 italic mb-4">"LearnX is very good platform of learning. I enrolled with Python Course and got a high paying job in a company. I am very thankful of LearnX mentors."</p>
          <div className="flex items-center space-x-3">
            <img src="https://i.pravatar.cc/150?u=2" className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
            <div>
              <p className="text-xs font-bold">Michael Chen</p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-2 h-2 fill-current" />)}
              </div>
            </div>
          </div>
        </div>
        <img 
          src="https://res.cloudinary.com/dvx6nsrd9/image/upload/v1773343211/placeholder_ova3fx.png" 
          alt="Student Success" 
          className="rounded-[2rem] shadow-lg"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const CourseDetails = () => {
  const { id } = useParams();
  const course = COURSES.find(c => c.id === id);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(course?.curriculum[0] || null);

  if (!course) return <div className="py-20 text-center">Course not found</div>;

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-brand-pink py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-2/3">
              <div className="flex items-center space-x-2 text-brand-coral text-sm font-bold mb-4">
                <span>{course.category}</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-500">{course.level}</span>
              </div>
              <h1 className="text-4xl font-bold mb-6">{course.title}</h1>
              <p className="text-gray-600 text-lg mb-8">{course.description}</p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center space-x-2">
                  <img src={TRAINERS.find(t => t.id === course.trainerId)?.avatar} className="w-10 h-10 rounded-full" />
                  <span className="font-medium">{course.trainer}</span>
                </div>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-gray-400 text-sm">({course.studentsCount} students)</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 w-full sticky top-24">
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                <img src={course.image} className="w-full h-48 object-cover rounded-2xl mb-6" />
                <div className="text-3xl font-bold mb-6">${course.price}</div>
                <button className="w-full py-4 bg-brand-coral text-white rounded-2xl font-bold hover:bg-brand-coral/90 transition-all shadow-lg shadow-brand-coral/20 mb-4">
                  Enroll Now
                </button>
                <p className="text-center text-xs text-gray-400">30-Day Money-Back Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-8">Course Curriculum</h2>
            <div className="space-y-4">
              {course.curriculum.map((lesson, idx) => (
                <div 
                  key={lesson.id}
                  onClick={() => setActiveLesson(lesson)}
                  className={cn(
                    "p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between",
                    activeLesson?.id === lesson.id ? "border-brand-coral bg-brand-pink/30" : "border-gray-100 hover:border-brand-coral/20"
                  )}
                >
                  <div className="flex items-center space-x-4">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      activeLesson?.id === lesson.id ? "bg-brand-coral text-white" : "bg-gray-100 text-gray-400"
                    )}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold">{lesson.title}</h4>
                      <p className="text-xs text-gray-400">{lesson.duration}</p>
                    </div>
                  </div>
                  <Play className={cn("w-5 h-5", activeLesson?.id === lesson.id ? "text-brand-coral" : "text-gray-300")} />
                </div>
              ))}
            </div>

            {activeLesson && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Active Lesson: {activeLesson.title}</h2>
                <div className="aspect-video bg-black rounded-3xl overflow-hidden mb-6 relative group">
                  <video 
                    src={activeLesson.videoUrl} 
                    controls 
                    className="w-full h-full"
                  />
                </div>
                <p className="text-gray-600">{activeLesson.description || "No description available for this lesson."}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const user = MOCK_USER;
  const enrolledCourses = user.enrolledCourses.map(ec => ({
    ...COURSES.find(c => c.id === ec.courseId)!,
    progress: ec.completedLessons.length
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
          <p className="text-gray-500">Track your progress and continue learning.</p>
        </div>
        <div className="flex space-x-4">
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="text-2xl font-bold text-brand-coral">{enrolledCourses.length}</div>
            <div className="text-xs text-gray-400 uppercase font-bold">Enrolled</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="text-2xl font-bold text-green-500">{user.certificates.length}</div>
            <div className="text-xs text-gray-400 uppercase font-bold">Certificates</div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-6">Your Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {enrolledCourses.map(course => {
          const progressPercent = Math.round((course.progress / course.lessonsCount) * 100);
          return (
            <div key={course.id} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src={course.image} className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-bold mb-4">{course.title}</h3>
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>{course.progress} / {course.lessonsCount} Lessons</span>
                  <span>{progressPercent}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full mb-6">
                  <div className="h-full bg-brand-coral rounded-full" style={{ width: `${progressPercent}%` }} />
                </div>
                <Link to={`/courses/${course.id}`} className="block w-full py-3 bg-brand-pink text-brand-coral text-center rounded-xl font-bold hover:bg-brand-coral hover:text-white transition-all">
                  Continue Learning
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="text-xl font-bold mb-6">Your Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {user.certificates.map(cert => (
          <div key={cert.id} className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold">{cert.courseName}</h4>
                <p className="text-xs text-gray-400 italic">Issued on {cert.issueDate}</p>
              </div>
            </div>
            <button className="p-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-brand-coral hover:text-white transition-all">
              <Download className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Profile = () => {
  const user = MOCK_USER;
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden">
        <div className="h-32 bg-brand-pink" />
        <div className="px-10 pb-10 -mt-16 text-center">
          <img src={user.avatar} className="w-32 h-32 rounded-full border-4 border-white mx-auto mb-6 shadow-lg" />
          <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
          <p className="text-gray-400 mb-8">{user.email}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-gray-50 p-6 rounded-3xl">
              <div className="text-2xl font-bold">{user.enrolledCourses.length}</div>
              <div className="text-xs text-gray-400 uppercase font-bold">Courses</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-3xl">
              <div className="text-2xl font-bold">{user.certificates.length}</div>
              <div className="text-xs text-gray-400 uppercase font-bold">Certificates</div>
            </div>
          </div>

          <div className="space-y-4 text-left">
            <div className="flex items-center justify-between p-4 border-b border-gray-50">
              <span className="text-gray-400">Member Since</span>
              <span className="font-medium">{user.joinDate}</span>
            </div>
            <div className="flex items-center justify-between p-4 border-b border-gray-50">
              <span className="text-gray-400">Account Status</span>
              <span className="text-green-500 font-bold">Active</span>
            </div>
          </div>

          <button className="mt-10 px-8 py-3 bg-brand-coral text-white rounded-full font-bold shadow-lg shadow-brand-coral/20 hover:bg-brand-coral/90 transition-all">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

const LoginPage = () => (
  <div className="min-h-[80vh] flex items-center justify-center px-6">
    <div className="max-w-md w-full bg-white p-10 rounded-[3rem] border border-gray-100 shadow-2xl">
      <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back</h1>
      <p className="text-gray-400 text-center mb-10">Sign in to continue your journey</p>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-bold mb-2">Email Address</label>
          <input type="email" className="w-full px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-brand-coral/20 focus:border-brand-coral outline-none transition-all" placeholder="name@example.com" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Password</label>
          <input type="password" className="w-full px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-brand-coral/20 focus:border-brand-coral outline-none transition-all" placeholder="••••••••" />
        </div>
        <div className="flex justify-end">
          <Link to="/forgot-password" title="Forgot Password" className="text-sm text-brand-coral font-bold">Forgot Password?</Link>
        </div>
        <button className="w-full py-4 bg-brand-coral text-white rounded-2xl font-bold shadow-lg shadow-brand-coral/20 hover:bg-brand-coral/90 transition-all">
          Sign In
        </button>
      </form>
      <p className="mt-8 text-center text-sm text-gray-500">
        Don't have an account? <Link to="/register" className="text-brand-coral font-bold">Register</Link>
      </p>
    </div>
  </div>
);

const AdminPanel = () => {
  const [courses, setCourses] = useState(COURSES);
  
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <button className="px-6 py-2 bg-brand-coral text-white rounded-full flex items-center space-x-2 font-bold hover:bg-brand-coral/90 transition-all">
          <Plus className="w-4 h-4" />
          <span>Add New Course</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-sm font-bold">Course</th>
              <th className="px-6 py-4 text-sm font-bold">Trainer</th>
              <th className="px-6 py-4 text-sm font-bold">Students</th>
              <th className="px-6 py-4 text-sm font-bold">Price</th>
              <th className="px-6 py-4 text-sm font-bold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {courses.map(course => (
              <tr key={course.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <img src={course.image} className="w-10 h-10 rounded-lg object-cover" />
                    <span className="font-medium">{course.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{course.trainer}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{course.studentsCount}</td>
                <td className="px-6 py-4 text-sm font-bold">${course.price}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-all"><Edit className="w-4 h-4" /></button>
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const BlogPage = () => (
  <div className="max-w-7xl mx-auto px-6 py-20">
    <h1 className="text-4xl font-bold mb-4 text-center">Our <span className="text-brand-coral">Blog</span></h1>
    <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">Stay updated with the latest trends in design, programming, and business.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {BLOG_POSTS.map(post => (
        <motion.div 
          key={post.id}
          whileHover={{ y: -10 }}
          className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all"
        >
          <img src={post.image} className="w-full h-64 object-cover" />
          <div className="p-8">
            <div className="flex items-center space-x-4 text-xs text-brand-coral font-bold mb-4">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>By {post.author}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">{post.excerpt}</p>
            <button className="flex items-center space-x-2 text-brand-coral font-bold hover:translate-x-2 transition-transform">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const ContactPage = () => (
  <div className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
      <div>
        <h1 className="text-4xl font-bold mb-6">Get in <span className="text-brand-coral">Touch</span></h1>
        <p className="text-gray-500 mb-12">Have questions about our courses or mentorship programs? We're here to help you grow.</p>
        
        <div className="space-y-8">
          <div className="flex items-center space-x-6">
            <div className="w-14 h-14 bg-brand-pink text-brand-coral rounded-2xl flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold">Email Us</h4>
              <p className="text-gray-500">support@learnx.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="w-14 h-14 bg-brand-pink text-brand-coral rounded-2xl flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold">Call Us</h4>
              <p className="text-gray-500">+91 234 567 8910</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="w-14 h-14 bg-brand-pink text-brand-coral rounded-2xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold">Live Chat</h4>
              <p className="text-gray-500">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-2xl">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2">Full Name</label>
              <input type="text" className="w-full px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-brand-coral/20 focus:border-brand-coral transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input type="email" className="w-full px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-brand-coral/20 focus:border-brand-coral transition-all" placeholder="john@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Phone Number</label>
            <input type="tel" className="w-full px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-brand-coral/20 focus:border-brand-coral transition-all" placeholder="+1 234 567 890" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Message</label>
            <textarea className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-brand-coral/20 focus:border-brand-coral transition-all h-32 resize-none" placeholder="How can we help you?" />
          </div>
          <button className="w-full py-4 bg-brand-coral text-white rounded-2xl font-bold shadow-lg shadow-brand-coral/20 hover:bg-brand-coral/90 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);

const Categories = () => {
  const categories = [
    { name: "Programming", icon: Code, count: 120 },
    { name: "Design", icon: Layout, count: 85 },
    { name: "Business", icon: BarChart, count: 45 },
    { name: "Marketing", icon: Users, count: 60 },
    { name: "Data Science", icon: Terminal, count: 30 }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">Top <span className="text-brand-coral">Categories</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-3xl border border-gray-100 text-center hover:shadow-xl hover:shadow-brand-coral/5 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 bg-brand-pink text-brand-coral rounded-2xl flex items-center justify-center mx-auto mb-4">
              <cat.icon className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm mb-1">{cat.name}</h4>
            <p className="text-xs text-gray-400">{cat.count} Courses</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const TrainerList = () => (
  <section className="py-20 bg-brand-pink/30">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">Meet Our <span className="text-brand-coral">Trainers</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TRAINERS.map(trainer => (
          <div key={trainer.id} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 text-center shadow-sm hover:shadow-md transition-all">
            <img src={trainer.avatar} className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-brand-pink" />
            <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
            <p className="text-brand-coral font-bold text-sm mb-4">{trainer.specialty}</p>
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-xs mb-6">
              <BookOpen className="w-4 h-4" />
              <span>{trainer.coursesCount} Courses</span>
            </div>
            <Link to={`/trainer/${trainer.id}`} className="inline-block px-6 py-2 border border-gray-200 rounded-full text-sm font-bold hover:bg-brand-coral hover:text-white hover:border-brand-coral transition-all">
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-bold text-brand-coral mb-6 block">LearnX</Link>
          <p className="text-gray-400 text-sm mb-6">learnx@gmail.com</p>
          <p className="text-gray-400 text-sm mb-8">+91 234 567 8910</p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-brand-coral cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-brand-coral cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-brand-coral cursor-pointer transition-colors" />
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/courses" className="hover:text-brand-coral transition-colors">All Courses</Link></li>
            <li><Link to="/trainers" className="hover:text-brand-coral transition-colors">Our Trainers</Link></li>
            <li><Link to="/blog" className="hover:text-brand-coral transition-colors">Blog & News</Link></li>
            <li><Link to="/contact" className="hover:text-brand-coral transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Categories</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-brand-coral transition-colors">Programming</a></li>
            <li><a href="#" className="hover:text-brand-coral transition-colors">Design</a></li>
            <li><a href="#" className="hover:text-brand-coral transition-colors">Business</a></li>
            <li><a href="#" className="hover:text-brand-coral transition-colors">Marketing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-brand-coral transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-brand-coral transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-coral transition-colors">Join as Trainer</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
        <p className="text-gray-400 text-xs mb-4 md:mb-0">© 2024 LearnX. All rights reserved.</p>
        <div className="flex items-center space-x-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4 opacity-30" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3 opacity-30" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4 opacity-30" />
        </div>
      </div>
    </div>
  </footer>
);

const Home = () => (
  <>
    <Hero />
    <Categories />
    <AreasOfInvolvement />
    <Mentorship />
    <MasteryBundles />
    <TrainerList />
    <Testimonials />
    
    {/* Call to Action Section */}
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="bg-brand-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Still not convinced on buying?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">Our service provider will call you and tell you more about courses and advantages of enrolling with courses.</p>
          <button className="px-10 py-4 bg-brand-coral text-white rounded-full font-bold hover:bg-brand-coral/90 transition-all shadow-xl shadow-brand-coral/20">
            Request a call
          </button>
        </div>
        {/* Background decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-coral/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-coral/10 rounded-full blur-[100px]" />
      </div>
    </section>
  </>
);

const CoursesPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";
  
  const filteredCourses = COURSES.filter(c => 
    c.title.toLowerCase().includes(search) || 
    c.category.toLowerCase().includes(search) ||
    c.trainer.toLowerCase().includes(search)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h1 className="text-4xl font-bold mb-4 md:mb-0">Explore <span className="text-brand-coral">Courses</span></h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 text-sm">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="font-medium">Filter</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <Link to={`/courses/${course.id}`} key={course.id} className="group">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
              <div className="relative overflow-hidden h-48">
                <img src={course.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-brand-coral">
                  {course.level}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold text-brand-coral mb-2 uppercase tracking-wider">{course.category}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-coral transition-colors">{course.title}</h3>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="ml-1 text-xs font-bold text-gray-700">{course.rating}</span>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-brand-coral">${course.price}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-coral/20 selection:text-brand-coral">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} /> {/* Mocking register with login */}
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
