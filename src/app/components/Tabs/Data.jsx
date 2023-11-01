import { useContext } from "react";
import DataContext from "@/app/Context/DataContext";

const Data = () => {
  const getData = useContext(DataContext);
  const tabs = [
    getData.sub == "Mathematics" &&
      getData.year == "B.Tech CSE 1st Semester" && {
        video: [
          {
            key: 1,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 2,
            heading: "Unitary Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/3nafrDiN0gU?si=OwRhRtzVqLtxMySv",
          },
          {
            key: 3,
            heading: "Linear Form of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/D5V0NXtWGtQ?si=2H3LmawO1R_bhZgy",
          },
          {
            key: 4,
            heading: "Taylor Series",
            description:
              " What is Taylor Theorem and how To Prove this? What is Taylor Series and how to expand this By Taylor Theorem?",
            link: "https://youtu.be/LEspaisjDFE?si=ygEIeVE__0-bMl1_",
          },

          {
            key: 5,
            heading: "Matrices 1",
            description:
              " What is matix?, How to calculate Determinants?,Types of Determinants, Minor & Cofactors, and Properties of Determinants",
            link: "https://www.youtube.com/watch?v=b-UZJVdLbXc&list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&index=1",
          },
          {
            key: 6,
            heading: "Matrices 2",
            description:
            "Numericals on Determinants, Types of Matrices and Multiplication of Matrices & its properties ",
            link: "https://www.youtube.com/watch?v=OWykXurjpFU&list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&index=2"
          },
          {
            key: 7,
            heading: "Properties of Matrices",
            description:
              " What is Adjoint matrix? What is Inverse of a matrix? What are symmetric, skew-symmetric and orthogonal matrices?? ",
            link: "https://www.youtube.com/watch?v=HyaeoGZyX10&list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&index=3",
          },
          {
            key: 8,
            heading: "Rank of a matrix using Elementary Operations",
            description:
              " What is Rank of a matrix ?? How to calculate it ?? Calculation of Rank using Elementary transformation.",
            link: "https://youtu.be/p5rBJj5CKCg?si=pPXTxicqYATGcOGQ",
          },
          
        ],
        pyq: [
          {
            key: 1,
            heading: "Mathematics-I 2021",
            description:
              "Mathematics-I 2021 question paper of MAKAUT in-house batch",
          },
        ],
        notes: [
          {
            key: 1,
            heading: "Matrix Practice Problems",
            description:
              "Matrix Problems involving unitary matrix, rank of a matrix, orthogonal matrix, Trace of a matrix, etc.",
          },
        ],
      },
    getData.sub == "Electrical & Digital Electronics" &&
      getData.year == "B.Tech CSE 1st Semester" && {
        video: [
          {
            key: 1,
            heading:
              "Understand and analyze basic electric and magnetic circuits",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/watch?v=UdaDs-zKfsA",
          },
          {
            key: 2,
            heading:
              "Study the working principles of electrical machines and power converters.",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://youtu.be/j_4jvMwIla0?si=ue3tTdmOsEZrd1ai",
          },
          {
            key: 3,
            heading:
              "Introduce the components of low voltage electrical installations",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://youtu.be/2_deQIpxNkQ?si=qfU5fReEKM5_Etjb",
          },

          {


            key: 4,
            heading:
              "All about Forward Bias",
            description:
              "In forward bias, the p-type(anode) of the semiconductor is connected to the positive end, and the n-type(cathode) is connected to the negative end of the battery.",
            link: "https://youtu.be/icrAf1us2IQ?si=t1Sm6NJFaQ72t6AA",
          },
          {
            key: 5,
            heading:
              " All about Reverse bias ",
            description:
              "The backward diode is a special form of tunnel diode in which the tunneling phenomenon is only incipient, and the negative resistance region virtually disappears",
            link: "https://youtu.be/u_8b4GAUWCg?si=tVdWEuqno9ddsw5h",
          },
              {
           
            key:6,
            heading:
            " All about Ideal Diode (First Approximation of PN junction Diode) Basic Electronics",
            description:
            "An ideal diode means a perfect diode which has all properties in their perfect sense without any flaws",
          link:
          "https://www.youtube.com/watch?v=W_4rBZdd41Q&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=5",}
          ,
          {
            key:7,
            heading:"Photo Diode (Construction & Working) Special Purpose Diodes (Basic Electronics)",
            description:"A photodiode is a light-sensitive semiconductor diode.It produces current when it absorbs photons.",
            link:"https://www.youtube.com/watch?v=BZLOGi3t740&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=36",
          },
          
          {
            key:8,
            heading:
            " All about Zener Diode",
            description:
            "Zener diodes are semiconductor devices that allow current to flow in both directions but specialize in current flowing in reverse. Also known as breakdown diodes.",
          link:
          "https://youtu.be/qVwEVXf3CBQ?si=Go_1C_oDuR-9z1Z2",},
         
        ],
      

        
        pyq: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
        notes: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
      },
    getData.sub == "Engineering Drawing" &&
      getData.year == "B.Tech CSE 1st Semester" && {
        video: [
          {
            key: 1,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 2,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 3,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 4,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 5,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
        ],
        pyq: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
        notes: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
      },
    getData.sub == "Chemistry" &&
      getData.year == "B.Tech CSE 1st Semester" && {
        video: [
          {
            key: 1,
            heading: "Introduction to Thermodynamics",
            description:
              "Thermodynamics is the science of the relationship between heat, work, temperature, and energy.",
            link: "https://youtu.be/72JId0JrNKU?si=0dg-9XcP_KkAG3K2",
          },
          {
            key: 2,
            heading: "Thermodynamic Systems",
            description:
             "A thermodynamic system is defined as a quantity of matter or a region in space that is of interest.",
            link: "https://youtu.be/H3dCYqw-Y4o?si=TnwnHGTOdOsgZi-t",
          },
          {
            key: 3,
            heading: "Thermodynamic Properties and Process",
            description:
              "some basic concepts related to thermodynamic properties and thermodynamic processes.",
            link: "https://youtu.be/ke1Qfc5SnnE?si=hjeYNlBX4XNUkjID",
          },
          
          {
            key: 4,
            heading: "Different Types Of Thermodynamic Process",
            description:
              "different types of thermodynamic processes on the basis of pressure, temperature and volume.",
            link: "https://youtu.be/llJd3XcboBo?si=hew8qTo8OXmSzY_N",
          }, 
          {
            key: 5,
            heading: "Quasistatic Process ",
            description:
              "some basic concepts related to quasistatic process.",
            link: "https://youtu.be/GDI2bVji2DU?si=b1zf42vOnFxZB-UV",
          },
          {
            key: 6,
            heading: "Thermodynamic Equilibrium ",
            description:
              "the properties of which do not change with time and that can be changed to another condition only at the expense of effects on other systems",
            link: "https://youtu.be/LH40zR2EPmQ?si=TPNRRm9LZkIZYITA",
          },
        
          
          
        ],
        pyq: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
        notes: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
      },
  ];

  return tabs;
};

export default Data;
