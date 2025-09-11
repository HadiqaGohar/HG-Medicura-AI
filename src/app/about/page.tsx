import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiAward, FiCode, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { SiNextdotjs, SiReact, SiTypescript, SiPython, SiTailwindcss, SiFigma } from 'react-icons/si';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Hadiqa Gohar - Creator of HG Resume Builder',
  description: 'Meet Hadiqa Gohar, the creator of HG Resume Builder. Student Leader, Web Developer, Agentic AI Developer, UI/UX Specialist, and SEO Expert passionate about building innovative solutions.',
  keywords: ['Hadiqa Gohar', 'Web Developer', 'AI Developer', 'UI/UX Designer', 'Resume Builder Creator'],
};

export default function About() {
  const skills = [
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  ];

  const achievements = [
    {
      icon: FiAward,
      title: 'GIAIC Laptop Winner',
      description: 'Won a laptop from Governor Sindh Initiative for Artificial Intelligence and Computing',
      color: 'text-blue-600'
    },
    {
      icon: FiUsers,
      title: '5K+ LinkedIn Followers',
      description: 'Built a strong professional network with like-minded individuals',
      color: 'text-blue-600'
    },
    {
      icon: FiCode,
      title: 'Modern Python Contributor',
      description: 'Honored to contribute to the Modern Python Colab Notebook project',
      color: 'text-blue-600'
    },
    {
      icon: FiTrendingUp,
      title: 'Student Leader',
      description: 'Leading initiatives at Governor Sindh Initiative for AI and Computing',
      color: 'text-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-4xl font-bold">HG</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              𝗛𝗲𝗹𝗹𝗼, 𝗜&apos;𝗺 𝗛𝗮𝗱𝗶𝗾𝗮 𝗚𝗼𝗵𝗮𝗿!
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              𝗦𝘁𝘂𝗱𝗲𝗻𝘁 𝗟𝗲𝗮𝗱𝗲𝗿 | 𝗪𝗲𝗯 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 | 𝗔𝗴𝗲𝗻𝘁𝗶𝗰 𝗔𝗜 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 | 𝗨𝗜/𝗨𝗫 𝗦𝗽𝗲𝗰𝗶𝗮𝗹𝗶𝘀𝘁 | 𝗦𝗘𝗢 𝗘𝘅𝗽𝗲𝗿𝘁
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://github.com/HadiqaGohar" 
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                <FiGithub className="mr-2" />
                GitHub Profile
              </Link>
              <Link 
                href="https://linkedin.com/in/hadiqagohar" 
                target="_blank"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                <FiLinkedin className="mr-2" />
                LinkedIn Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            🌍 My Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            𝙄 𝙝𝙚𝙡𝙥 𝙗𝙪𝙨𝙞𝙣𝙚𝙨𝙨𝙚𝙨 𝙗𝙪𝙞𝙡𝙙 𝙛𝙖𝙨𝙩, 𝙢𝙤𝙙𝙚𝙧𝙣, 𝙖𝙣𝙙 𝙨𝙘𝙖𝙡𝙖𝙗𝙡𝙚 𝙬𝙚𝙗𝙨𝙞𝙩𝙚𝙨 𝙩𝙝𝙖𝙩 𝙙𝙤𝙣&apos;𝙩 𝙟𝙪𝙨𝙩 𝙡𝙤𝙤𝙠 𝙜𝙧𝙚𝙖𝙩 — 𝙩𝙝𝙚𝙮 𝙙𝙧𝙞𝙫𝙚 𝙧𝙚𝙖𝙡 𝙧𝙚𝙨𝙪𝙡𝙩𝙨.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">About Me</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I&apos;m a Student Leader at the <strong>Governor Sindh Initiative</strong>, specializing in Cloud Applied Generative AI. With 1+ years of experience in web development and a deep passion for cutting-edge technology, I strive to create impactful solutions that drive innovation and user satisfaction.
              </p>
              <p>
                As a UI/UX expert, I craft intuitive designs and seamless user experiences. My proficiency in modern frameworks like Next.js and CMS tools like Sanity allows me to deliver visually stunning, dynamic, and user-friendly web applications.
              </p>
              <p>
                I bring strong problem-solving skills to debug and optimize projects effectively, ensuring every solution I create meets the highest standards of quality and performance.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">💡 What I Bring to the Table</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Expertise in crafting intuitive designs and seamless user experiences as a UI/UX expert</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Proficiency in modern frameworks like Next.js and CMS tools like Sanity</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Strong problem-solving skills to debug and optimize projects effectively</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Passion for leveraging the latest tech to turn ideas into reality</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">🔹 Skills Snapshot 📸</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <IconComponent className="w-12 h-12 mx-auto mb-3" style={{ color: skill.color }} />
                  <p className="font-semibold text-gray-800">{skill.name}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 max-w-4xl mx-auto">
              <strong>Full Stack:</strong> HTML | CSS | JavaScript | TypeScript | Next.js | TailwindCSS | React.js | Node.js | Sanity CMS | Python | Streamlit | ShadCN UI | Clerk Auth | Kinde Auth | Figma | Canva | UV | Fast API | OpenAI Agents SDK | Chainlit
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">🔹 Achievements 🪄</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <IconComponent className={`w-12 h-12 mx-auto mb-4 ${achievement.color}`} />
                  <h4 className="font-bold text-gray-800 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Hire Me */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl text-white p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">❝ Why Hire Me? ❞</h3>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed mb-6">
              I specialize in modern web technologies and bring frontend expertise that ensures your website is responsive, SEO-friendly, and visually appealing. I&apos;m passionate about leveraging the latest tech to turn ideas into reality.
            </p>
            <p className="text-lg leading-relaxed">
              My frontend expertise ensures your website is responsive, SEO-friendly, and visually appealing. I combine creativity, technical expertise, and a passion for innovation to deliver exceptional results.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">🔹 Looking to Collaborate? 🔎</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            If you&apos;re searching for a developer who combines creativity, technical expertise, and a passion for innovation, I&apos;m here to help. Whether it&apos;s solving errors, creating a scalable web app, or designing a user-first interface, let&apos;s build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              <FiMail className="mr-2" />
              Get In Touch
            </Link>
            <Link 
              href="/template"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
            >
              Try HG Resume Builder
            </Link>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-lg text-gray-600 italic">
            &quot;𝙃𝙤𝙣𝙤𝙧𝙚𝙙 𝙩𝙤 𝘾𝙤𝙣𝙩𝙧𝙞𝙗𝙪𝙩𝙚 𝙩𝙤 𝙩𝙝𝙚 𝙈𝙤𝙙𝙚𝙧𝙣 𝙋𝙮𝙩𝙝𝙤𝙣 𝘾𝙤𝙡𝙖𝙗 𝙉𝙤𝙩𝙚𝙗𝙤𝙤𝙠! 🖤&quot;
          </p>
          <p className="text-xl font-semibold text-gray-800 mt-4">
            👋 𝐋𝐞𝐭&apos;𝐬 𝐜𝐨𝐧𝐧𝐞𝐜𝐭 𝐚𝐧𝐝 𝐬𝐡𝐚𝐩𝐞 𝐭𝐡𝐞 𝐟𝐮𝐭𝐮𝐫𝐞!
          </p>
        </div>
      </div>
    </div>
  );
}
