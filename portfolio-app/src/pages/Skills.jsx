import React from 'react';
import './Skills.css';

const Skills = () => {

const skills = [
{
category: 'Programming Languages',
items: ['JavaScript','Java','TypeScript','C++','HTML','CSS']
},
{
category: 'Frameworks & Libraries',
items: ['React','Node.js','Next.js','Angular','Bootstrap']
},
{
category: 'Databases',
items: ['MongoDB','MySQL','PostgreSQL']
},
{
category: 'Tools & Platforms',
items: ['Git','Docker','Postman','Bitbucket','JIRA','Redis','Jenkins','Kibana']
}
];

return (
<div className="skills">

<div className="skills-header">
<h2>Skills</h2>
<p>My Tech Stack</p>
</div>

<div className="skills-content">

{skills.map((skillCategory,index)=>(
<div
key={index}
className="skill-category slide-in"
style={{animationDelay:`${index * 0.8}s`}}
>

<h3>{skillCategory.category}</h3>

<ul>
{skillCategory.items.map((skill,i)=>(
<li key={i}>{skill}</li>
))}
</ul>

</div>
))}

</div>
</div>
);
};

export default Skills;