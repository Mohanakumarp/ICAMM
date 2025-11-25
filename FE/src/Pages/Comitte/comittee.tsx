import ProfileCardSimple from './profilecardSimple';
import './committee.css';
import * as images from '../../images';

type Member = {
  photo: string | undefined;
  name: string;
  designation: string;
  organisation: string;
  knowMoreLink: string;
  position: string;
  showPhoto?: boolean;
};

const committeeMembers: Member[] = [
  {
    photo: '',
    showPhoto: false,
    name: 'Shri L Gopalakrishnan',
    designation: 'Managing Trustee',
    organisation: "PSG & Sons' Charities Trust",
    knowMoreLink: '',
    position: 'CHIEF PATRON'
  },
  {
    photo: '',
    showPhoto: false,
    name: 'Dr K Prakasan',
    designation: 'Principal',
    organisation: 'PSG College of Technology',
    knowMoreLink: '',
    position: 'PATRON'
  },
  {
    photo: '',
    showPhoto: false,
    name: 'Dr C Porkodi',
    designation: 'Professor and Head,\nDepartment of Mathematics',
    organisation: 'PSG College of Technology',
    knowMoreLink: '',
    position: 'CONVENOR'
  },
  {
    photo: '',
    showPhoto: false,
    name: 'Dr R Subalakshmi',
    designation: 'Assistant Professor (Sl. Gr.), \nDepartment of Mathematics',
    organisation: 'PSG College of Technology',
    knowMoreLink: '',
    position: 'ORGANISING SECRETARY'
  },
  // Add more members as needed
];

// Organising committees data and component
const organisingCommitteesData: { title: string; members: string[] }[] = [
  {
    title: 'Programme Committee',
    members: [
      'Dr.B.Sridevi (Advisor)',
      'Dr.R.Rajasudha (Convener)',
      'Dr.M.Sumathi',
      'Ms.S.T.Padmalakshmi',
      'Dr.V.Deepa',
    ],
  },
  {
    title: 'Proceedings Committee',
    members: [
      'Dr.T.Vasanthi (Advisor)',
      'Dr.A. Muthulakshmi (Convener)',
      'Dr.C.K.Deena Merit',
      'Dr.D.Kiruthika',
      'Dr.R.Syama',
      'Ms.R.Brindha',
    ],
  },
  {
    title: 'Funding and Finance Committee',
    members: [
      'Dr.M.Haridass (Advisor)',
      'Dr.R.Deena (Convener)',
      'Dr.P.Sathyakala',
      'Dr.Ragi Krishnan',
      'Ms.G.Tamilselvi',
    ],
  },
  {
    title: 'Hall Arrangements Committee',
    members: [
      'Dr.K.Sangavai (Advisor)',
      'Dr.M. Bagyalakshmi (Convener)',
      'Dr.P.Sathyakala',
      'Dr.C.K.Deena Merit',
      'Dr.D.Kiruthika',
      'Dr.R.Syama',
    ],
  },
  {
    title: 'Registration Committee',
    members: [
      'Dr.R. Bindhu (Convener)',
      'Dr.Ragi Krishnan',
      'Dr.V.Deepa',
      'Ms.G.Tamilselvi',
      'Ms.R.Brindha',
    ],
  },
  {
    title: 'Publicity Committee',
    members: [
      'Dr.P.Muthukumar (Advisor)',
      'Ms.M.Radhiga (Convener)',
      'Dr.R.Syama',
      'Dr.K.Anukiruthika',
    ],
  },
  {
    title: 'Hospitality Committee',
    members: [
      'Dr.P.Muthukumar (Advisor)',
      'Dr.J.Narayanasamy (Convener)',
      'Mr.K.Saravanan',
      'Dr.J.Palraj',
      'Dr.K.Anukiruthika',
    ],
  },
];

//advisoryCommittee

const advisoryCommittee: Member[] = [
  {
    photo: images.arumuganathan,
    showPhoto: false,
    name: 'Dr R Arumuganathan',
    designation: 'Professor , Department of Mathematics',
    organisation: 'PSG College of Technology',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.john,
    showPhoto: false,
    name: 'Dr John Rozario Jegaraj',
    designation: 'Technology Director & Senior Scientist (G) ',
    organisation: 'DRDO , India',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.pandian,
    showPhoto: false,
    name: 'Dr.Pandian P.S.',
    designation: 'Scientist, Defence Bioengineering and Electromedical Laboratory',
    organisation: 'DRDO , India',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.sankar,
    showPhoto: false,
    name: 'Dr.CH.N.A.B. Sankar',
    designation: 'Scientist, Research Centre Imarat',
    organisation: 'DRDO , India',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.sankar,
    showPhoto: false,
    name: 'Dr Joseph Winston',
    designation: 'Scientist',
    organisation: 'IGCAR , Tamil Nadu',
    knowMoreLink: '',
    position: ''
  },
  
];

const technicalCommittee: Member[] = [
  {
    photo: images.mahesh,
    showPhoto: false,
    name: 'Dr. Maheshanand',
    designation: 'Professor and Head of the Department of Mathematics',
    organisation: 'IIIT Roorkee',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.abhay,
    showPhoto: false,
    name: 'Dr. Abhay Kumar Singh',
    designation: 'Associate Professor, Department of Mathematics and Computing',
    organisation: 'IIT (ISM), Dhanbad',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.rubell,
    showPhoto: false,
    name: 'Dr. Rubell Marion Lincy George',
    designation: 'Assistant Professor & Head - Department of Computer Science and Engineering',
    organisation: 'IIIT Kottayam',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.amalanjosephantony_1,
    showPhoto: false,
    name: 'Dr. Amalan Joseph Antony A',
    designation: 'Assistant Professor',
    organisation: 'IIITDM Kancheepuram',
    knowMoreLink: '',
    position: ''
  },
  {
    photo: images.drsgkManikandan,
    showPhoto: false,
    name: 'Dr. Manikandan SGK',
    designation: 'Scientist',
    organisation: 'ISRO',
    knowMoreLink: '',
    position: ''
  },
];

const Committee = () => {
  // For layout: put PATRON, CO - PATRON and CONVENOR in a single top row
  return (
    <>
      <section className="committee-simple-section">
        <h1 className="section-title" style={{ marginTop: 10, marginBottom: 10 }}>THE Committee</h1>

        {/* All organizing committee members in 2-column grid */}
        <div className="committee-simple-grid organising-committee-grid">
          {committeeMembers.map((member, idx) => (
            <ProfileCardSimple
              key={`committee-${idx}`}
              photo={member.photo}
              name={member.name}
              designation={member.designation}
              organisation={member.organisation}
              knowMoreLink={member.knowMoreLink}
              position={member.position}
              showPhoto={member.showPhoto}
            />
          ))}
        </div>
      </section>

      {/* Organising Committees with toggle buttons */}
      <section className="committee-simple-section organising-committees-section">
        <h1 className="section-title" style={{ marginTop: 40, marginBottom: 10 }}> ORGANISING COMMITTE</h1>        
        <OrganisingCommittees />
      </section>

      <section className="committee-simple-section">
        <h1 className="section-title" style={{ marginTop: 40, marginBottom: 10 }}> Advisory Committee</h1>
        <div className="committee-simple-grid advisory-committee-grid">
          {advisoryCommittee.map((member, idx) => (
            <ProfileCardSimple
              key={idx}
              photo={member.photo}
              name={member.name}
              designation={member.designation}
              organisation={member.organisation}
              knowMoreLink={member.knowMoreLink}
              position={member.position}
              showPhoto={member.showPhoto}
            />
          ))}
        </div>
      </section>

      <section className="committee-simple-section">
        <h1 className="section-title" style={{ marginTop: 40, marginBottom: 10 }}>Technical Committee</h1>
        <div className="committee-simple-grid technical-committee-grid">
          {technicalCommittee.map((member, idx) => (
            <ProfileCardSimple
              key={idx}
              photo={member.photo}
              name={member.name}
              designation={member.designation}
              organisation={member.organisation}
              knowMoreLink={member.knowMoreLink}
              position={member.position}
              showPhoto={member.showPhoto}
            />
          ))}
        </div>
      </section>

      
    </>
  );
};

import React from 'react';

const OrganisingCommittees: React.FC = () => {
  // Render all organising committees as a matrix/grid with title and member list
  return (
    <div className="organising-committees-grid">
      {organisingCommitteesData.map((c) => (
        <div className="organising-committee-panel" key={c.title}>
          <div className="org-panel-title">{c.title}</div>
          <ul className="org-committee-members">
            {c.members.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Committee;
