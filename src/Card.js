import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            repoName: this.props.repo,
            name: '',
            avatar_url: '',
            description: '',
            open_issues: '',
            forks: '',
            homepage: '',
            language: '',
            notFound: ''
        }
    }
    render() {
        let data = this.state;

        if (data.notFound === 'Not Found') {
            // When repo is not found. Will be used when dynamically looking for repos
            return <h3 className="card__notfound">Repo not found. Try again!</h3>
        } else {
            // if repo found, then...
            return (
                <div className="card">
                    <div className="card__top">
                        <h2 className="card__reponame">
                            <a className="card__link" href={data.url} target="_blank">{data.repoName}</a></h2>
                    </div>
                    <a href={data.homepage} target="_blank">
                        <img className="card__avatar_url" src={data.avatar_url} alt={data.repoName}/>
                    </a>

                    <div className="card__middle">
                        <span>{data.name}</span>
                        <span>{data.language}</span>
                    </div>

                    <dl>

                        <dt>Name</dt>
                        <dd>{data.name}</dd>

                        <dt>Description</dt>
                        <dd>{data.description}</dd>

                        <dt>Open Issues</dt>
                        <dd>{data.open_issues}</dd>

                        <dt>Forks</dt>
                        <dd>{data.forks}</dd>

                        <dt>Homepage</dt>
                        <dd>{data.homepage}</dd>
                    </dl>
                </div>
            )

        }
    }

    // the api request function
    fetchRepoApi(url) {

        fetch(url)
            .then((res) => res.json() )
            .then((data) => {

                // update state with API data
                this.setState({
                    repoName: data.full_name,
                    name: data.name,
                    avatar_url: data.owner.avatar_url,
                    description: data.description,
                    open_issues: data.open_issues,
                    forks: data.forks,
                    homepage: data.homepage,
                    language: data.language,
                    notFound: data.message
                })
            })
            .catch((err) => console.log('oh no!') );
    }

    componentDidMount() {
        let url = `https://api.github.com/repos/${this.state.repoName}`;
        this.fetchRepoApi(url)
    }
}

export default Card;