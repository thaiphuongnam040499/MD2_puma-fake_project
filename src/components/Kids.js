import React from 'react'

export default function Kids() {
    return (
        <div className='kids'>
            <div className="slide-three my-5">
                <div className="slide_list">
                    <h3 className="slide_item">MB.02 RICK AND MORTY</h3>
                    <p className="slide_item">BY LAMELO BALL</p>
                    <button className="slide_btn">SHOP MELO</button>
                </div>
            </div>
            {/* NEW COLLECTIONS */}
            <div className="new-collections my-5">
                <div className="text-center">
                    <h2>NEW COLLECTIONS HAVE ARRIVED</h2>
                    <p>OUR LATEST COLLABS AND CURATIONS</p>
                </div>
                <div className="collecttions d-flex ">
                    <div className="card me-2 text-center">
                        <img
                            src="https://cdn.sanity.io/images/qa41whrn/prod/77e7075c20d7c07cb27a14127eb692e422ab09de-1536x1536.jpg?w=2160&q=80&auto=format"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">PUMA x TMC</h5>
                            <p className="card-text">THE HUSSLE WAY | STATUS SYMBOL</p>
                            <a href="#" className="btn btn-dark">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                    <div className="card ms-2 text-center">
                        <img
                            src="https://cdn.sanity.io/images/qa41whrn/prod/832f0aa26a921c0ac47fdfde776f308d40bb1c3e-1536x1536.jpg?w=2160&q=80&auto=format"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">BLOCK PARTY COLLECTION</h5>
                            <p className="card-text">CELEBRATING ALL THINGS HOOPS</p>
                            <a href="#" className="btn btn-dark">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* END NEW COLLECTIONS */}
            {/* WARDROBE */}
            <div className="wardrobe my-5">
                <div className="text-center">
                    <h2>REFRESH YOUR WARDROBE</h2>
                    <p>BUILD AN OUTFIT</p>
                </div>
                <div className="wardrobe-list d-flex justify-content-center">
                    <div className="card me-2 text-center" style={{ width: "30rem" }}>
                        <img
                            src="https://cdn.sanity.io/images/qa41whrn/prod/7a4217af09d256858ee73de4196114943f977450-750x750.webp?w=2160&q=80&auto=format"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">YOUR NEXT PAIR</h5>
                            <p className="card-text">REFRESH YOUR KICKS</p>
                            <a href="#" className="btn btn-dark">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                    <div className="card me-2 text-center" style={{ width: "30rem" }}>
                        <img
                            src="https://cdn.sanity.io/images/qa41whrn/prod/7b4fe88272c62f5f7732974c5416f68c137b5185-500x500.webp?w=2160&q=80&auto=format"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">FRESH LOOKS</h5>
                            <p className="card-text">FROM HEAD TO TOE</p>
                            <a href="#" className="btn btn-dark">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                    <div className="card me-2 text-center" style={{ width: "30rem" }}>
                        <img
                            src="https://cdn.sanity.io/images/qa41whrn/prod/7072034ac409a77dbe0577fc2151623568f63db2-750x750.webp?w=2160&q=80&auto=format"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">ROUND OUT YOUR LOOK</h5>
                            <p className="card-text">TOP IT OFF IN STYLE</p>
                            <a href="#" className="btn btn-dark">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* END WARDROBE */}
            </div>
    )
}
