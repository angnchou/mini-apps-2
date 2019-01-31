import React from 'react';
import $ from 'jquery';
import Search from './search.jsx';
import axios from 'axios';
import { create } from 'domain';
import ReactPaginate from 'react-paginate';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      input: '',
      total: 0,
      offset: 10,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleInput(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSearch() {
    this.fetchSearchPage(0);
  }

  fetchSearchPage(pageNumber) {
    axios
      .get('/events', {
        params: { q: this.state.input, _limit: 10, _page: pageNumber + 1 },
      })
      .then(result => {
        const total = parseInt(result.headers['x-total-count']);
        this.setState({
          data: result.data,
          total: total,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>Enter a keyword to find historical events!</h2>

        <div className="pageButtons">
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={Math.ceil(this.state.total / 10)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={pageObject => {
              console.log(pageObject);
              this.fetchSearchPage(pageObject.selected);
            }}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>

        <Search
          handleSearch={this.handleSearch}
          handleInput={this.handleInput}
          input={this.state.input}
        />
        <List data={this.state.data} />
      </div>
    );
  }
}

export default App;
