import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import Card from './Card.js';
import './App.css';

const ResponsiveReactGridLayout = ReactGridLayout.WidthProvider(ReactGridLayout.Responsive);

const cardWidth = 2.5;
const cardHeight = 3.5;

class Grid extends Component {
    render() {
        const gridItems = [
            { id: 1, name: 'bitcoin/bitcoin' },
            { id: 2, name: 'ethereum/go-ethereum'  },
            { id: 3, name: 'ripple/rippled'  },
            { id: 4, name: 'bitcoin-abc/bitcoin-abc'  },
            { id: 5, name: 'input-output-hk/cardano-sl'  },
            { id: 6, name: 'neo-project/neo'  }
        ];
        const layout = [
            {i: '1', x: 0, y: 0, w: cardWidth, h: cardHeight},
            {i: '2', x: 3, y: 0, w: cardWidth, h: cardHeight},
            {i: '3', x: 6, y: 0, w: cardWidth, h: cardHeight},
            {i: '4', x: 0, y: 3, w: cardWidth, h: cardHeight},
            {i: '5', x: 3, y: 3, w: cardWidth, h: cardHeight},
            {i: '6', x: 6, y: 3, w: cardWidth, h: cardHeight}
        ];

        return (
            <ResponsiveReactGridLayout
                layouts={{ lg: layout }}
                measureBeforeMount={true}
                className="layout"
                rowHeight={this.props.rowHeight}
                isDragable={true}
                isResizable={true}
                onDrag={this.onDragging}
                onDragStop={this.onMoveCard}
                onResizeStop={this.onResizeCard}
                margin={[20, 20]}
            >
                {gridItems.map((item, i) => {
                    return (
                        <div key={item.id} className="grid-item"> <Card repo={item.name} /> </div>
                    );
                })}
            </ResponsiveReactGridLayout>
        );
    }
}

export default Grid;
