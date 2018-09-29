import * as React from 'react'
import Plan from '../components/Plan'

class EventDetail extends React.Component {

  render() {
    return (
      <div className="my-3 my-md-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-lg-1">
              <div className="text-center"><h3>Event name</h3></div>
              <div className="list-group list-group-transparent mb-0">
                <div className="timeline-custom">
                  <ul className="timeline">
                    <Plan/>
                    <Plan/>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="card">
                <div className="card-body">
                  <div className="text-wrap p-lg-6">
                    <h2 className="mt-0 mb-4">Introduction</h2>
                    <p>We’ve created this admin panel for everyone who wants to create any templates based on our ready components. Our mission is to deliver a user-friendly, clear and easy administration panel, that can be used by both, simple websites and sophisticated systems. The only requirement is a basic HTML and CSS knowledge—as a reward, you’ll be able to manage and visualize different types of data in the easiest possible way!</p>
                    <h3 id="setup-environment">Setup environment</h3>
                    <p>To use our build system and run our documentation locally, you’ll need a copy of Tabler’s source files and Node. Follow these steps:</p>
                    <ol>
                      <li><a href="https://nodejs.org/download/">Download and install Node.js</a>, which we use to manage our dependencies.</li>
                      <li>Navigate to the root <code className="highlighter-rouge">/tabler</code> directory and run <code className="highlighter-rouge">npm install</code> to install our local dependencies listed in <code className="highlighter-rouge">package.json</code>.</li>
                      <li>
                        <p><a href="https://www.ruby-lang.org/en/documentation/installation/">Install Ruby</a>, install <a href="https://bundler.io/">Bundler</a> with <code className="highlighter-rouge">gem install bundler</code>, and finally run <code className="highlighter-rouge">bundle install</code>. This will install all Ruby dependencies, such as Jekyll and plugins.</p>
                        <p><strong>Windows users:</strong> Read <a href="https://jekyllrb.com/docs/windows/">this guide</a> to get Jekyll up and running without problems.</p>
                      </li>
                    </ol>
                    <p>When completed, you’ll be able to run the various commands provided from the command line.</p>
                    <h3 id="build-tabler-locally">Build Tabler locally</h3>
                    <ol>
                      <li>From the root <code className="highlighter-rouge">/tabler</code> directory, run <code className="highlighter-rouge">npm run serve</code> in the command line.</li>
                      <li>Open <a href="http://localhost:4000">http://localhost:4000</a> in your browser, and voilà.</li>
                      <li>Any change in <code className="highlighter-rouge">/src</code> directory will build application and refresh the page.</li>
                    </ol>
                    <div className="alert alert-warning">
                      <strong>Warning!</strong> all changes made in <code>_site/</code> folder would be overwriten on application build.
                      </div>
                    <h3 id="bugs-and-feature-requests">Bugs and feature requests</h3>
                    <p>Have a bug or a feature request? <a href="https://github.com/tabler/tabler/issues/new">Please open a new issue</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventDetail;