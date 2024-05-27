
const Container = (props) => {
  return (
    <section className="text-black body-font">
        <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap -m-4">
                {props.children}
            </div>
        </div>
    </section>
  )
}

export default Container
