
const Container = (props) => {
  return (
    <section className="text-black body-font bg-[#f5f6fa] ">
        <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap -m-4">
                {props.children}
            </div>
        </div>
    </section>
  )
}

export {Container};
