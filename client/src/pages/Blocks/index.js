import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Block from './Block';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';



class Blocks extends Component {
  state = { blocks: [], paginatedId: 1, blocksLength: 0 };

  componentDidMount() {
    // fetch(`http://localhost:3000/api/blocks/length`)
      fetch(`${document.location.origin}/api/blocks/length`)

      .then(response => response.json())
      .then(json => this.setState({ blocksLength: json }));

    this.fetchPaginatedBlocks(this.state.paginatedId)();
  }

  fetchPaginatedBlocks = paginatedId => async () => {
  //  await fetch(`http://localhost:3000/api/blocks/${paginatedId}`)
  await fetch(`${document.location.origin}/api/blocks/${paginatedId}`)

      .then(response => response.json())
      .then(json => this.setState({ blocks: json }));
  }

  render() {
    console.log('this.state', this.state);

    return (
      <div>
        <div><Link to='/'>Home</Link></div>
        <h3>Blocks</h3>
       
        {/* {
          this.state.blocks.map(block => {
            return (
              <Block key={block.hash} block={block} />
            );
          })
        } */}
{ console.log(this.state.blocks)}
        {
         
          
          <BasicTimeline props={this.state.blocks} />
          

        }
         <div>
          {
            [...Array(Math.ceil(this.state.blocksLength / 5)).keys()].map(key => {
              const paginatedId = key + 1;

              return (
                <span key={key} onClick={this.fetchPaginatedBlocks(paginatedId)}>
                  <Button bsSize="small" bsStyle="danger">
                    {paginatedId}
                  </Button>{' '}
                </span>
              )
            })
          }
        </div>
      </div>
    );
  }
}

const BasicTimeline = props =>  {

  let blocks = props.props;
  console.log("Blocks", blocks)
  

return (
  <Timeline>
   
    {blocks.map((block, index) => {
      return (
        <TimelineItem key={block.hash} >
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
      <Block block={block} styleKey={index} />
        </TimelineContent>
    </TimelineItem>
        
      )
    })}
   </Timeline >
);
  
}

export default Blocks;