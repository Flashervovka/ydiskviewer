import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/Container'
const breadCrumbs = (crumbs,pathChange) => {
    let crumbsList = crumbs.map((element,index)=>
        {
            if(element.active)return <Breadcrumb.Item key={index} active>{element.label}</Breadcrumb.Item>
            else return <Breadcrumb.Item  key={index} path={element.path} onClick={(e)=>{pathChange(e.currentTarget.getAttribute('path'))}}>{element.label}</Breadcrumb.Item>
        }
    );
    return (
        <Container fluid>
            <Breadcrumb>
                {crumbsList}
            </Breadcrumb>
        </Container>

    );
}

export default breadCrumbs