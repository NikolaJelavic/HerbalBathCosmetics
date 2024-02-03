
import Accordion from "react-bootstrap/Accordion";


export default function Postman() {
    return (
    <>
    <div className="flex flex-col lg:flex-row justify-evenly mt-24">
    <Accordion
          defaultActiveKey="2" //always open one
          className="w-full lg:w-2/5 mb-4 lg:mb-0"
        >
          <Accordion.Item eventKey="1">
            <Accordion.Header>
             Basics
            </Accordion.Header>
            <Accordion.Body className="visible">
              

            <p className="text-2xl text-bold"> Usefull Links</p>
              <p className="m-2">


              </p>
              <a href="https://onedrive.live.com/?authkey=%21AD3oN3FIU9QgXkY&id=1164DD8150B91EA3%216058&cid=1164DD8150B91EA3&parId=root&parQt=sharedby&parCid=9E628F8D40CD970F&o=OneUp">Introduction to 
API Testing - Slides from Udemy course - Testing Bootcamp</a> <br />
            <a href="https://reqres.in/">reqres.in</a>

              <p className="text-2xl text-bold">Knowledge levels</p>
              <p className="m-2">
K1 - Remember - The candidate will recognize, remember and recall a term or concept   <br />
K2 - Understand - Select the reasons or explanations for statement related to the topic and can summarize, differentiate, classify and give examples for facts, testing concepts and test procedures.    <br />
K3 - Analyze - Select the correct application of a concept or technique and apply it to a given context. K3 is normally applicable to procedural knowledge.     <br />
              </p>
              <p className="text-2xl text-bold">
                Exam pattern
              </p>
              <p className="m-2">
                40 questions, each one mark, 60 +15 minutes, minimum 26 points<br />
            </p>
            <p className="text-2xl text-bold">
                Learning Objectives
              </p>
              <p className="m-2">
K1 - Identify typical objectives of testing <br />
K2 - Differentiate testing from debugging <br />
K3 - 
            </p>


         

             
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
             Definitions
            </Accordion.Header>
            <Accordion.Body className="visible">
            <p >Web service is used for REST, SOAP while API is used
for any style of communication              </p>
<p>Web service supports only HTTP protocol whereas API supports
HTTP/HTTPS protocol.</p>
<p>Web service supports XML while API supports XML and JSON.</p>
<p>All Web services are APIs but all APIs are not web services.</p>

              <p className="text-2xl text-bold">Foundations of Software Testing</p>
              <p className="m-2">
              Test basis - the body of knowledge used as the basis for test analysis <br/>

Test condition - Testable aspect of a component or system identified as a basis for testing <br/>


Test case - Set of preconditions, inputs, actions, expected results and postconditions, developed based on test conditions. Set of actions to test conditions. <br />



Test procedure - Sequence of test cases in execution order, and any associated actions that may be required to set up the initial preconditions and any wrap up activities post execution. <br />


Test data - Data needed for test execution. <br />

Test suite - Set/group  of test scripts or test procedures to be executed in a specific test run. <br />


Testware - Work products produced during the test process for use in planning, designing, executing, evaluating and reporting on testing. <br />



Test oracle - Source to determine an expected result to compare with the actual result of the system under test <br />



              </p>
              <p className="text-2xl text-bold">
              7 Principles
              </p>
              <p className="m-2">
              1. Testing shows the presence of defects, not their absence <br />
2. Exhaustive testing is impossible <br />
3. Early testing saves time and money <br />
4. Defects cluster together <br />
5. Beware of the pesticide paradox <br />
6. Early testing saves time and money <br />
7. Absence-of-errors is a fallacy(zabluda) <br />

              </p>
              
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              
             3
            </Accordion.Header>
            <Accordion.Body className="visible">
              <Accordion.Body className="visible">
                
              <p className="m-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quae explicabo, culpa eligendi molestiae libero voluptates tenetur vitae omnis officiis autem repellendus adipisci, consequatur illum beatae laudantium pariatur quibusdam quisquam?
              </p>
              <p className="text-2xl text-bold">11</p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in? Voluptas veritatis quo aperiam eius aspernatur? Sint hic quod aspernatur dolor exercitationem, cumque facere, accusantium provident maxime amet vitae ad.
              </p>
              <p className="text-2xl text-bold">
                12
              </p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos, voluptas nobis vero enim porro sit consequatur voluptates blanditiis necessitatibus consequuntur ut ipsum quasi dicta officia quas error asperiores dolores?
                Animi unde fugiat eveniet illo reiciendis optio harum aut deserunt magni? Quo saepe cupiditate tenetur odit maxime assumenda eligendi pariatur, tempore nostrum quaerat facilis amet laboriosam harum ducimus. Nam, cum!
              </p>

                
              </Accordion.Body>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
             
              4
            </Accordion.Header>
            <Accordion.Body className="visible">
             
            <p className="m-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quae explicabo, culpa eligendi molestiae libero voluptates tenetur vitae omnis officiis autem repellendus adipisci, consequatur illum beatae laudantium pariatur quibusdam quisquam?
              </p>
              <p className="text-2xl text-bold">11</p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in? Voluptas veritatis quo aperiam eius aspernatur? Sint hic quod aspernatur dolor exercitationem, cumque facere, accusantium provident maxime amet vitae ad.
              </p>
              <p className="text-2xl text-bold">
                12
              </p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos, voluptas nobis vero enim porro sit consequatur voluptates blanditiis necessitatibus consequuntur ut ipsum quasi dicta officia quas error asperiores dolores?
                Animi unde fugiat eveniet illo reiciendis optio harum aut deserunt magni? Quo saepe cupiditate tenetur odit maxime assumenda eligendi pariatur, tempore nostrum quaerat facilis amet laboriosam harum ducimus. Nam, cum!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              
              5
            </Accordion.Header>
            <Accordion.Body className="visible">
            <p className="m-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quae explicabo, culpa eligendi molestiae libero voluptates tenetur vitae omnis officiis autem repellendus adipisci, consequatur illum beatae laudantium pariatur quibusdam quisquam?
              </p>
              <p className="text-2xl text-bold">11</p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in? Voluptas veritatis quo aperiam eius aspernatur? Sint hic quod aspernatur dolor exercitationem, cumque facere, accusantium provident maxime amet vitae ad.
              </p>
              <p className="text-2xl text-bold">
                12
              </p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos, voluptas nobis vero enim porro sit consequatur voluptates blanditiis necessitatibus consequuntur ut ipsum quasi dicta officia quas error asperiores dolores?
                Animi unde fugiat eveniet illo reiciendis optio harum aut deserunt magni? Quo saepe cupiditate tenetur odit maxime assumenda eligendi pariatur, tempore nostrum quaerat facilis amet laboriosam harum ducimus. Nam, cum!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>
              
              6
            </Accordion.Header>
            <Accordion.Body className="visible">
              
            <p className="m-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quae explicabo, culpa eligendi molestiae libero voluptates tenetur vitae omnis officiis autem repellendus adipisci, consequatur illum beatae laudantium pariatur quibusdam quisquam?
              </p>
              <p className="text-2xl text-bold">11</p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in? Voluptas veritatis quo aperiam eius aspernatur? Sint hic quod aspernatur dolor exercitationem, cumque facere, accusantium provident maxime amet vitae ad.
              </p>
              <p className="text-2xl text-bold">
                12
              </p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos, voluptas nobis vero enim porro sit consequatur voluptates blanditiis necessitatibus consequuntur ut ipsum quasi dicta officia quas error asperiores dolores?
                Animi unde fugiat eveniet illo reiciendis optio harum aut deserunt magni? Quo saepe cupiditate tenetur odit maxime assumenda eligendi pariatur, tempore nostrum quaerat facilis amet laboriosam harum ducimus. Nam, cum!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>
              
              7
            </Accordion.Header>
            <Accordion.Body className="visible">
              
            <p className="m-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quae explicabo, culpa eligendi molestiae libero voluptates tenetur vitae omnis officiis autem repellendus adipisci, consequatur illum beatae laudantium pariatur quibusdam quisquam?
              </p>
              <p className="text-2xl text-bold">11</p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in? Voluptas veritatis quo aperiam eius aspernatur? Sint hic quod aspernatur dolor exercitationem, cumque facere, accusantium provident maxime amet vitae ad.
              </p>
              <p className="text-2xl text-bold">
                12
              </p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos, voluptas nobis vero enim porro sit consequatur voluptates blanditiis necessitatibus consequuntur ut ipsum quasi dicta officia quas error asperiores dolores?
                Animi unde fugiat eveniet illo reiciendis optio harum aut deserunt magni? Quo saepe cupiditate tenetur odit maxime assumenda eligendi pariatur, tempore nostrum quaerat facilis amet laboriosam harum ducimus. Nam, cum!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header>
              
          8
            </Accordion.Header>
            <Accordion.Body className="visible">
            <p className="m-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quae explicabo, culpa eligendi molestiae libero voluptates tenetur vitae omnis officiis autem repellendus adipisci, consequatur illum beatae laudantium pariatur quibusdam quisquam?
              </p>
              <p className="text-2xl text-bold">11</p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in? Voluptas veritatis quo aperiam eius aspernatur? Sint hic quod aspernatur dolor exercitationem, cumque facere, accusantium provident maxime amet vitae ad.
              </p>
              <p className="text-2xl text-bold">
                12
              </p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos, voluptas nobis vero enim porro sit consequatur voluptates blanditiis necessitatibus consequuntur ut ipsum quasi dicta officia quas error asperiores dolores?
                Animi unde fugiat eveniet illo reiciendis optio harum aut deserunt magni? Quo saepe cupiditate tenetur odit maxime assumenda eligendi pariatur, tempore nostrum quaerat facilis amet laboriosam harum ducimus. Nam, cum!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="9">
            <Accordion.Header>
              
              9
            </Accordion.Header>
            <Accordion.Body className="visible">
              
            <p className="m-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quae explicabo, culpa eligendi molestiae libero voluptates tenetur vitae omnis officiis autem repellendus adipisci, consequatur illum beatae laudantium pariatur quibusdam quisquam?
              </p>
              <p className="text-2xl text-bold">11</p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in? Voluptas veritatis quo aperiam eius aspernatur? Sint hic quod aspernatur dolor exercitationem, cumque facere, accusantium provident maxime amet vitae ad.
              </p>
              <p className="text-2xl text-bold">
                12
              </p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos, voluptas nobis vero enim porro sit consequatur voluptates blanditiis necessitatibus consequuntur ut ipsum quasi dicta officia quas error asperiores dolores?
                Animi unde fugiat eveniet illo reiciendis optio harum aut deserunt magni? Quo saepe cupiditate tenetur odit maxime assumenda eligendi pariatur, tempore nostrum quaerat facilis amet laboriosam harum ducimus. Nam, cum!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="10">
            <Accordion.Header>
              
             10
            </Accordion.Header>
            <Accordion.Body className="visible">
              
            <p className="m-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quae explicabo, culpa eligendi molestiae libero voluptates tenetur vitae omnis officiis autem repellendus adipisci, consequatur illum beatae laudantium pariatur quibusdam quisquam?
              </p>
              <p className="text-2xl text-bold">11</p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in? Voluptas veritatis quo aperiam eius aspernatur? Sint hic quod aspernatur dolor exercitationem, cumque facere, accusantium provident maxime amet vitae ad.
              </p>
              <p className="text-2xl text-bold">
                12
              </p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos, voluptas nobis vero enim porro sit consequatur voluptates blanditiis necessitatibus consequuntur ut ipsum quasi dicta officia quas error asperiores dolores?
                Animi unde fugiat eveniet illo reiciendis optio harum aut deserunt magni? Quo saepe cupiditate tenetur odit maxime assumenda eligendi pariatur, tempore nostrum quaerat facilis amet laboriosam harum ducimus. Nam, cum!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="11">
            <Accordion.Header>
             
              11
            </Accordion.Header>
            <Accordion.Body className="visible">
              
            <p className="m-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quae explicabo, culpa eligendi molestiae libero voluptates tenetur vitae omnis officiis autem repellendus adipisci, consequatur illum beatae laudantium pariatur quibusdam quisquam?
              </p>
              <p className="text-2xl text-bold">11</p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in? Voluptas veritatis quo aperiam eius aspernatur? Sint hic quod aspernatur dolor exercitationem, cumque facere, accusantium provident maxime amet vitae ad.
              </p>
              <p className="text-2xl text-bold">
                12
              </p>
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos, voluptas nobis vero enim porro sit consequatur voluptates blanditiis necessitatibus consequuntur ut ipsum quasi dicta officia quas error asperiores dolores?
                Animi unde fugiat eveniet illo reiciendis optio harum aut deserunt magni? Quo saepe cupiditate tenetur odit maxime assumenda eligendi pariatur, tempore nostrum quaerat facilis amet laboriosam harum ducimus. Nam, cum!
              </p>
            </Accordion.Body>
          </Accordion.Item>
    </Accordion>
    </div>
    </>
    )
};
