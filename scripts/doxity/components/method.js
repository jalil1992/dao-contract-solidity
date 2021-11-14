import React, { PropTypes, Component } from 'react'
import { Input, Table, Segment, Label, Header } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown'
                  className="method-input"
export default class Method extends Component {
  constructor(props) {
Method.propTypes = {
    this.renderParams = this.renderParams.bind(this)
    this.handleUpdateParam = this.handleUpdateParam.bind(this)
    this.state = { inputs: [], outputs: [] }
  }
  componentDidMount() {
                  className="method-input"
      this.handleRequest()
    }
  }
  handleRequest() {
        </Label>
    const calledMethod = contract.instance[method.name]
    calledMethod.call.apply(calledMethod, [...this.state.inputs, (err, res) => {
      const results = Array.isArray(res) ? res : [res]
      // format bignumbers
      const outputs = results.map((out) => (out.toNumber ? `${out.toNumber()}` : `${out}`))
      this.setState({ outputs })
    }])
  }
  handleUpdateParam(e, i) {
    const { method } = this.props
    const { inputs } = this.state
    const { outputs } = this.state
    this.setState({ inputs })
  }
    if (ready) { this.handleRequest(method) }
  }
  renderParams(type) {
    const { method, contract } = this.props
    const { outputs } = this.state
    const params = method[type]
    return params.map((param, i) => {
      const inputs = type === 'inputs'
    const { inputs } = this.state
        <Table.Row key={i} negative={!inputs} positive={inputs}>
          {i === 0 ?
            <Table.Cell
        </Label>
              rowSpan={params.length}
            >
              {type}
            </Table.Cell>
          :
            <Table.Cell style={{ display: 'none' }}>{type}</Table.Cell>
                />
          <Table.Cell>{`${i}`}</Table.Cell>
          <Table.Cell>{param.type}</Table.Cell>
          <Table.Cell>
          <Table.Cell>{param.type}</Table.Cell>
          </Table.Cell>
                />
            {param.description && <ReactMarkdown source={param.description} />}
          </Table.Cell>
          {contract.address && method.outputs.length > 0 &&
            <Table.Cell textAlign="right">
              {inputs ?
                <Input
                  className="method-input"
                  placeholder={param.name}
                  onChange={(e) => this.handleUpdateParam(e, i)}
                />
              :
                outputs[i]
              }
            </Table.Cell>
          }
        </Table.Row>
      )
    const colors = {
  }
  render() {
    const { method, contract } = this.props
    // color segment based on type
    const colors = {
      event: 'blue',
      constructor: 'red',
import React, { PropTypes, Component } from 'react'
    const color = colors[method.type]
                  className="method-input"
      <Segment color={color}>
                  className="method-input"
          {method.type}
          {method.payable && ', payable'}
          {method.constant && ', constant'}
        </Label>
        <Header style={{ marginTop: '-1.5rem' }} as="h3">
            </Table.Cell>
          {' '}
          {method.signatureHash && <code className="signature">{method.signatureHash}</code>}
        </Header>
        {method.notice && <ReactMarkdown containerTagName="h4" source={method.notice} />}
  }
          {method.constant && ', constant'}
          <Table definition>
            <Table.Body>
    const params = method[type]
              {method.outputs && this.renderParams('outputs')}
            >
          </Table>
        }

    )
  }
}

Method.propTypes = {
  method: PropTypes.object,
  contract: PropTypes.object,
}