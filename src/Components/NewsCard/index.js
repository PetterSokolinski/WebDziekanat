import React, { Component } from 'react'
import { Icon, Card } from 'semantic-ui-react'

const IconStyles = {
  cursor: "default"
}
class NewsCard extends Component {

    render() {
        const { news, title, description, extra, width } = this.props
        return(
            <Card style={{width: width}}>
              <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{description}</Card.Meta>
                <Card.Description>{news}</Card.Description>
              </Card.Content>
              <Card.Content extra>
      <a style={IconStyles}>
        <Icon name='exclamation' />
        {extra}
      </a>
    </Card.Content>
            </Card>
            
        )
    }

}

export default NewsCard