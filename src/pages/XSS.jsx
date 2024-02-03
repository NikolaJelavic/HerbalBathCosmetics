import Accordion from "react-bootstrap/Accordion";


export default function XSS() {
    return  (
        <>
        <div className="flex flex-col lg:flex-row justify-evenly mt-24">
        <Accordion
              defaultActiveKey="2" //always open one
              className="w-full lg:w-2/5 mb-4 lg:mb-0"
            >
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Definitions
                </Accordion.Header>
                <Accordion.Body className="visible">
                  
                  <p className="m-2">
Cross-Site scripting(XSS) is a client-side web vulnerability, caused by a lack of input sanitization/validation in web apps. These Scripts are executed by victims browser.                 </p>
                  <p className="text-2xl text-bold">2 categories</p>
                  <p className="m-2">
- Stored/persistant <br/>
JS Attack through web app's database via input that is not sanitized. And XSS payload will be executed by the browser of anyone that visits that webpage. <br />
- Reflected/non persistant is more common XSS. <br />
When victim cliks on the link the website includes the XSS payload as part of the response back to the victims browser, where the payload is executed.     <br/> <br />
script alert("Under construction") script <br />
script window.location.replace("https://google.com"); script
         </p>
                  <p className="text-2xl text-bold">
                    XSS attacks objectives
                  </p>
                  <p className="m-2">
                    <i>Cookie stealing/Session hijacking</i> - stealing cookies from the users with authenticated sessions <br />
                    <i>Browser exploitation</i> - exploitation of browser vulnerabilities <br />
                    <i>Keylogging</i> - Logging keyboard entries made by other users on a web app. <br />
                    <i>Phishing</i> - injecting fake loging forms into a webpage to capture credentials
                    </p>
    
             
    
                 
                </Accordion.Body>
              </Accordion.Item>
    
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                 
                  Links
                </Accordion.Header>
                <Accordion.Body className="visible">
                <p className="m-2">
               <a href="https://github.com/payloadbox/xss-payload-list" > https://github.com/payloadbox/xss-payload-list</a>                  </p>
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
