const Button = props => {
  const {name} = props
  return <button className={`eachButton ${name}`}>{name}</button>
}

const element = (
  <div className='background'>
    <div className='buttons'>
      <h1 className='social-heading'>Social Buttons</h1>
      <div className='threeButtons'>
        <Button name='like' />
        <Button name='Comment' />
        <Button name='Share' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
