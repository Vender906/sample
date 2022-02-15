import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form';
import './app.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../post-list/post-list.css';
import '../post-list-item/post-list-item.css';
import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: 'Going to learn React', important: true, id: 'fgfgf' },
                { label: 'That is so good', important: false, id: 'dsfsder' },
                { label: 'I need a break...', important: false, id: 'ertdvfh' }
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        
    }

    render() {
        return (
        <div className='app'>
            <AppHeader />
            <div className='search-panel d-flex'>
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList
                posts={this.state.data}
                onDelete={ this.deleteItem }/>
            <PostAddForm
                onAdd={ this.addItem }/>
            </div>
        )
    }
}

