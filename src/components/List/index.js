import React from 'react'
import { pontomaisApi } from '../../api'

const styles = {
    cards : {
        paddingBottom: '10px',
        display: 'inherit'
    }
}

export default class List extends React.Component {
    state = {
        time_cards:[]
    }
    async componentDidMount () {
        const data = await pontomaisApi.getWorkDay()
        const time_cards = data.work_day.time_cards
        this.setState({time_cards})
    }
    getCards = () => {
        return this.state.time_cards.map( (card, index) =>
                <span key={index} style={styles.cards}>
                    <b>Data</b> {card.date} <br/>
                    <b>Hora</b> {card.time} <br/>
                </span>)
    }
    render() {
        return (
            <div>
                {this.getCards()}
            </div>
        )
    }
}