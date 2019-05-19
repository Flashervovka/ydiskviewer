import React from 'react'
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const sourceList = (sources,pathChange) => {

    function getItem(itemData){
        let path = itemData.path.replace("disk:","");
        if(itemData.type==="dir")
            return  <Row>
                        <Col><div className="folderIcon"><Link to={path} className="folderName" onClick={(e)=>{pathChange(e.currentTarget.getAttribute('href'))}}>{itemData.name}</Link></div></Col>
                    </Row>
        else return <Row>
                        <Col md="10" xs="8">{itemData.name}</Col>
                        <Col md="2" xs="4" className="fileSize">{Math.round(itemData.size/1024)} kb</Col>
                    </Row>
    }

    let list = sources.map((element,index)=>
        {
            return <ListGroup.Item  key={index}>{getItem(element)}</ListGroup.Item>
        }
    );

    return (
        <ListGroup>
            <Container fluid>
                {list}
            </Container>
        </ListGroup>
    );
}

export default sourceList