import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiDownload } from "react-icons/bi";
import { FaCalendarDays, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { GoArrowUpRight } from "react-icons/go";
import { LuMedal } from "react-icons/lu";
import { PiGraduationCap } from "react-icons/pi";
import firstImg from '../../public/assets/b.JPG';
import secondImg from '../../public/b.JPG'
// import Spinner from "./components/Spinner";
// import "./index.css";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Home() {
  // Active service background color
  const [activeIndex, setActiveIndex] = useState(0);
  const handleHover = (index) => setActiveIndex(index);
  const handleMouseOut = () => setActiveIndex(0);

  // Services data
  const services = [
    {
      title: "App Development",
      description: "We bring your vision and goals to life by developing innovative, user-centric apps that inspire and engage your audience."
    },
    {
      title: "Web Development",
      description: "I excel in delivering high-quality web development services, ensuring outstanding results tailored to the unique needs of your business."
    },
    {
      title: "Freelancer [App&Web]",
      description: "As a freelancer, I specialize in providing tailored services that deliver exceptional results, helping businesses achieve their goals and stand out in a competitive market."
    },
    {
      title: "Content Creator",
      description: "Passionate photographer and videographer capturing moments with creativity. Transforming visions into visual stories. Expert in visual storytelling, skilled in both photography and videography to deliver captivating content."
    }
  ];

  const [loading, setLoading] = useState(true);
  const [alldata, setAlldata] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [allwork, setAllwork] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        // Replace with your actual API endpoints
        const [projectResponse, blogResponse] = await Promise.all([
          fetch('/api/projects'),
          fetch('/api/blogs')
        ]);

        const projecData = await projectResponse.json();
        const blogsData = await blogResponse.json();
        setAlldata(projecData);
        setAllwork(blogsData);
      } catch (error) {
        console.error('Error fetching Data ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(alldata.filter(pro => pro.status === 'publish'));
    } else {
      setFilteredProjects(alldata.filter(pro => pro.status === 'publish' && pro.projectcategory[0] === selectedCategory));
    }
  }, [selectedCategory, alldata]);

  // Typing animation
  const textArray = ["Web Developer", "Content Creator", "Fullstack Developer"];
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);
  const typingSpeed = 80;
  const deletingSpeed = 50;
  const delayBetweenTexts = 1000;
  
  useEffect(() => {
    const currentText = textArray[textIndex];
  
    if (pause) {
      const pauseTimeout = setTimeout(() => {
        setPause(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return () => clearTimeout(pauseTimeout);
    }
  
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
  
        if (charIndex + 1 === currentText.length) {
          setPause(true);
        }
      } else {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
  
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % textArray.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
  
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, pause, textArray]);

  const formatDate = (date) => {
    if (!date || isNaN(date)) return '';
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour12: true };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const dummyProjects = [
    {
      _id: "1",
      title: "Personal Portfolio Website",
      images: ["./assets/Portfolio.png"],
      category: "Website Development",
    },
    {
      _id: "2",
      title: "My Friend Shop Website",
      images: ["./assets/friendshop.png"],
      category: "Website Development",
    },
    {
      _id: "3",
      title: "Design System for Dashboard",
      images: ["./assets/desindashboard.png"],
      category: "Design System",
    },
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setAllProjects(dummyProjects);
      setFilteredProjects(dummyProjects);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter((pro) => pro.category === selectedCategory)
      );
    }
  }, [selectedCategory, allProjects]);

  return (
    <>
    {/* <Head>
        
        <meta name="description" content="adityaraj - Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" crossOrigin="anonymous" />
       
      </Head> */}

      <title>Deepak Gupta - Portfolio</title>

      {/* Hero Section */}
      <section className="hero">
      <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x='50%' y='50%' textAnchor='middle' className="animate-stroke">HII</text>
          </svg>

        </div>
        <div className="container">
          <div className="flex w-100">
            <div className="heroinfoleft">
              <span className="hero_sb_title" data-aos="fade-left">I am Deepak Gupta</span>
              <h1 className="hero_title aos-init aos-animate" data-aos="fade-right">
                Mern Developer + <br />
                <span className="typed-text text-blue-600">{text}</span>
                <span className="typed-cursor text-blue-600">|</span>
              </h1>
              <div className="hero_img_box heroimgbox" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="4000">
              <img src={firstImg} alt="coder" />
              </div>
              <div className="lead" data-aos="fade-up">
                I specialize in crafting comprehensive digital solutions, seamlessly integrating my expertise as a software engineer, web developer, full-stack developer, and content creator.
              </div>
              <div className="hero_btn_box" data-aos="fade-up">
                <a href="../../public/Deepak Gupta Resume.pdf" download className="download_cv">
                  Download CV <BiDownload />
                </a>
                <ul className="hero_social">
                  <li><a href="https://www.instagram.com/deepakgupta_8172/?igsh=MTQxZnZvdzYydDMwNg%3D%3D#"><FaInstagram /></a></li>
                  <li><a href="https://www.linkedin.com/in/deepak-gupta-633b00286/"><GrLinkedinOption /></a></li>
                  <li><a href="https://github.com/DeepakGupta4"><FaGithub /></a></li>
                  <li><a href="https://x.com/home"><FaTwitter /></a></li>
                </ul>
              </div>
            </div>
            <div className="heroimageright">
              <div className="hero_img_box" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <img src={secondImg} alt="coder" />
              </div>
            </div>
          </div>
          <div className="funfect_area flex flex-sb">
            <div className="funfect_item"  data-aos="fade-right">
              <h3>0</h3>
              <h4>year of<br />Experience</h4>
            </div>
            <div className="funfect_item"  data-aos="fade-right">
              <h3>5+</h3>
              <h4>projects<br />completed</h4>
            </div>
            {/* <div className="funfect_item">
              <h3>15+</h3>
              <h4>OpenSource<br />Library</h4>
            </div> */}
            <div className="funfect_item"  data-aos="fade-left">
              <h3>2+</h3>
              <h4>Happy<br />Customers</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" >
        <div className="services" >
          <div className="container">
          <div className="services_titles">
            <h2>MY Quality services</h2>
            <p>We transform your vision and ideas into exceptional web projects that captivate both you and your customers.</p>
          </div>
          <div className="services_menu" >
            {services.map((service, index) => (
              <div 
                key={index}
                className={`services_item ${activeIndex === index ? 'sactive' : ''}`}
                onMouseOver={() => handleHover(index)}
                onMouseOut={handleMouseOut}
              >
                <div className="left_s_box">
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                </div>
                <div className="right_s_box">
                  <p>{service.description}</p>
                </div>
                <GoArrowUpRight />
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <div className="project_titles">
            <h2>My Recent Works</h2>
            <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
          </div>
          <div className="project_buttons">
            <button className={selectedCategory === 'All' ? 'active' : ''} onClick={() => setSelectedCategory('All')}>All</button>
            <button className={selectedCategory === 'Website Development' ? 'active' : ''} onClick={() => setSelectedCategory('Website Development')}>Website</button>
            <button className={selectedCategory === 'App Development' ? 'active' : ''} onClick={() => setSelectedCategory('App Development')}>Apps</button>
            <button className={selectedCategory === 'Design System' ? 'active' : ''} onClick={() => setSelectedCategory('Design System')}>Design</button>
            <button className={selectedCategory === 'Video Editing' ? 'active' : ''} onClick={() => setSelectedCategory('Video Editing')}>Editing</button>
            
          </div>

          <div className="projects_cards"data-aos="flip-left" >
            {loading ? (
              <div className="flex flex-center wh_100" ></div>
            ) : filteredProjects.length === 0 ? (
              <h1 className="w-100 flex flex-center mt-3">No Project Found</h1>
            ) : (
              filteredProjects.slice(0, 4).map((pro) => (
                <Link to={`/projects`} key={pro._id} className="procard">
                  <div className="proimgbox" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img src={pro.images[0]} alt={pro.title} />
                  </div>
                  <div className="procontentbox">
                    <h2>{pro.title}</h2>
                    <GoArrowUpRight />
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="exstudy">
        <div className="container flex flex-left flex-sb">
          <div className="experience" data-aos="flip-right">
            <div className="experience_title flxe gap-1">
              <LuMedal />
              <h2>My Experience</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2025-Present</span>
                <h3>Freelance</h3>
                <p>Full Stack App/Web Developer</p>
              </div>
              <div className="exper_card">
                <span>2024-Present</span>
                <h3>Freelance</h3>
                <p> Video Editor</p>
              </div>
              {/* <div className="exper_card">
                <span>2024-Present</span>
                <h3>YouTube Content Creation</h3>
                <p>Full Stack App/Web Developer</p>
              </div> */}
              {/* <div className="exper_card">
                <span>2025-Present</span>
                <h3>Developing Phase</h3>
                <p>Unreal Engine 5 Game development</p>
              </div> */}
              <div className="exper_card">
                <span>2024-Present</span>
                <h3>Learning Phases(CSE)</h3>
                <p>Self Study</p>
              </div>
            </div>
          </div>
          <div className="experience" data-aos="flip-left">
            <div className="experience_title flxe gap-1">
              <PiGraduationCap />
              <h2>My Education</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2018-2019</span>
                <h3>Higher Secondary Education</h3>
                <p>Navjeewan Inter College Patherwa Kushinagar</p>
              </div>
              <div className="exper_card">
                <span>2019-2022</span>
                <h3>Diploma </h3>
                <p>SIRT Bhopal</p>
              </div>
              <div className="exper_card">
                <span>2022-2025</span>
                <h3>B.Tech</h3>
                <p>SAM Global University</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="myskills">
        <div className="container">
          <div className="myskills_title">
            <h2>My Skills</h2>
            <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers</p>
          </div>
          <div className="myskils_cards">
            {[
              { name: "Python", img: "/assets/python.jpeg", percent: "25%" },
              { name: "Express", img: "/assets/express.svg", percent: "77%" },
              { name: "C++", img: "/assets/c++.png", percent: "40%" },
              { name: "MongoDB", img: "/assets/mongodb.svg", percent: "90%" },
              // { name: "Premiere pro", img: "/assets/9.svg", percent: "80%" },
              // { name: "Kotlin", img: "/assets/kotlin.svg", percent: "97%" },
              { name: "Node", img: "/assets/nodejs.png", percent: "90%" },
              { name: "JavaScript", img: "/assets/js.svg", percent: "75%" },
              // { name: "Unreal engine 5", img: "/assets/7.svg", percent: "50%" },
              { name: "React", img: "/assets/react.svg", percent: "80%" },
              // { name: "Django", img: "/assets/2.svg", percent: "89%" },
              // { name: "Android Studio", img: "/assets/3.svg", percent: "93%" },
              // { name: "Java", img: "/img/5.svg", percent: "92%" },
              // { name: "After Effect", img: "/assets/6.svg", percent: "85%" },
              { name: "Tailwind Css", img: "/assets/8.svg", percent: "71%" },
              // { name: "Photoshop", img: "/assets/10.svg", percent: "85%" },
              { name: "Capcut", img: "/assets/11.svg", percent: "60%" },
              { name: "Canva", img: "/assets/13.svg", percent: "50%" }
            ].map((skill, index) => (
              <div className="mys_card" key={index}>
                <div className="mys_inner" data-aos="fade-right">
                  <img src={skill.img} alt={skill.name} />
                  <h2>{skill.percent}</h2>
                </div>
                <p className="text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section className="recentblogs">
        <div className="container" data-aos="fade-up" >
          <div className="myskills_title">
            <h2>Recent Blogs</h2>
            <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers</p>
          </div>
          <div className="recent_blogs">
            {allwork.slice(0, 3).map((blog) => (
              <Link to={`/blogs/${blog.slug}`} key={blog._id} className="re_blog">
                <div className="re_blogimg">
                  <img src={blog.images[0] || '/img/noimage.png'} alt={blog.title} />
                  <span>{blog.blogcategory[0]}</span>
                </div>
                <div className="re_bloginfo">
                  <div className="re_topdate flex gap-1">
                    <div className="res_date">
                      <FaCalendarDays /> <span>{formatDate(new Date(blog.createdAt))}</span>
                    </div>
                  </div>
                  <h2>{blog.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </>
  );
}