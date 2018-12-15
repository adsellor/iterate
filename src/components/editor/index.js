// @flow

import React, { PureComponent } from 'react'
import Markdown from 'markdown-to-jsx'

import Button from 'components/button'

import { withFirebase } from 'src/store/provider'

type EditorState = {
  value: string,
}

type EditorProps = {
  store: Object,
}

class Editor extends PureComponent<EditorProps, EditorState> {
  state = {
    value: '',
  }

  _handleChange = event => {
    this.setState({ value: event.target.value })
  }

  _handleSubmit = () => {
    const date = new Date().toDateString()
    const storageRef = this.props.store.storage.ref()
    const fileRef = storageRef.child(`posts/${date}/index.md`)
    const content = new File([this.state.value], 'Post', {
      type: 'text/markdown',
    })
    fileRef.put(content).then(snapshot => alert('sent'))
  }

  render() {
    return (
      <>
        <textarea
          style={{ resize: 'none', height: '50vh', width: '100vw' }}
          onChange={this._handleChange}
        />
        <Markdown>{this.state.value}</Markdown>
        <Button onClick={this._handleSubmit} backgroundColor="black">
          Publish
        </Button>
      </>
    )
  }
}

export default withFirebase(Editor)
