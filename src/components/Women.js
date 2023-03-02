import React from 'react'

export default function Women() {
    return (
        <div className='women'>
            <div className="slide-four my-5">
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
                            src="https://cdn.sanity.io/images/qa41whrn/prod/f5bdf1934fc3ca27ce258a1e6b0dd4ab993dd688-1350x1350.webp?w=2160&q=80&auto=format"
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
                            src="https://cdn.sanity.io/images/qa41whrn/prod/5a1baf203f8b07e747c589374c17694304e08fcb-1536x1536.jpg?w=2160&q=80&auto=format"
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
                            src="https://cdn.sanity.io/images/qa41whrn/prod/c69e600106e97f2275a7a3c891f0d8aa51d4e253-750x750.webp?w=1440&q=80&auto=format"
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
                            src="https://cdn.sanity.io/images/qa41whrn/prod/e66421c93590b28121a773d4bae863e27e142335-750x750.webp?w=1440&q=80&auto=format"
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
                            src="https://cdn.sanity.io/images/qa41whrn/prod/3739980d44e63c2a13fa25cea00e5b6f4af6a632-750x750.webp?w=1440&q=80&auto=format"
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
