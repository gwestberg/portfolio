

Mobile:
- Alignment on the profile-image
- Skill-Buttons, styling, alignment etc...


Home:
- Replace container class in content-div

Projects:
- Create a page for adding projects (modal?)

About:
- Add some form of resumé (modal?)
- Make the skill-"buttons" dynamic
- Turn the skills into JSON-objects 

Blog:
- Create a blogpage
- create a page for adding posts (modal?)

Ideas:
- Carousel with projects?
- DONE! Placement of components?(style the spacing between each component)
- DONE! Placement of icons (header, footer)?




DOING:

DONE:
- Style Source Code button!!!
- REPLACED with react-awesome-reveal! Find a replacement for react-reveal (pack is out-of-date)
- IMPORTANT! element alignment on mobile screens!! (profile-pic crooked, about overflows into projects)
- FIXED!Link color in header
- FIXED! Fix some fancy animation for the header
- FIXED! Larger spacing between components?



$ git add .
$ git commit -m "Create a React app and publish it to GitHub Pages"
$ git push origin master

$ npm run deploy


****************************
    <div className="row">
        <div className="col-lg-6 col-sm-6 mb-8">
            <Collapsible triggerStyle={{ cursor: "pointer", padding: 1 + "%" + + "%" + 0 + "%" + 0 + "%" }} trigger={<h3 className="card-title collapse-t">Experiences</h3>}>
                <div className="collapsible-content">
                    <h6 className="card-title">LIA - Centiro</h6>
                    <p className="card-text boxText">My first experience in a real software company, 4 weeks during my education just to give us a taste of whahead</p>
                </div>
                <div className="collapsible-content">
                    <h6 className="card-title">LIA - Centiro</h6>
                    <p className="card-text boxText">My first experience in a real software company, 4 weeks during my education just to give us a taste of whahead</p>
                </div>
            </Collapsible>
        </div>
        <div className="col-lg-6 col-sm-6 mb-8">
            <Collapsible triggerStyle={{ cursor: "pointer", padding: 1 + "%" + 0 + "%" + 0 + "%" + 0 + "%" }} trigger={<h3 className="card-tcollapse-title">Education</h3>}>
                <p className="card-text boxText">Relevant education...</p>
            </Collapsible>
        </div>
    </div>
****************************