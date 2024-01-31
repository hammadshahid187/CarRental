import React from 'react'

export const BookingBox = () => {
  return (
    <div id="hero-header" className='h-90per d-flex align-middle align-items-end text-center'>
		<div className="container position-relative mb-5">
			<div className="col-lg-10 col-md-10 col-lg-12 mx-auto mb-5">
				<div className="pb-2">
					<h3 className='largest-font text-white'>its time for adventures & Experiences</h3>
				</div>
				<div className="mt-3 tabBox bg-white p-4 pt-2 rounded">
					<nav>
						<div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
						  <button className="nav-link active py-3" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Car for Rent</button>
						  <button className="nav-link py-3" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Car for Buy</button>
						</div>
					  </nav>
					  <div className="tab-content bg-white" id="nav-tabContent">
						<div className="tab-pane fade show active pt-4" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
							<div className="row m-0">
								<div className="col-lg-5 col-md-3 col-12 ps-lg-0 mb-lg-0 mb-md-0 mb-2 ">
									<div className="clockBox py-1 px-4 rounded text-start pe-3">
										<label for="" className="small-text">Pickup Address
										</label>
										<input type="text" className="w-100 babasFont" placeholder='Address' />
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-12 ps-lg-1 mb-lg-0 mb-md-0 mb-2 ">
									<div className="clockBox py-1 px-4 rounded text-start pe-3">
										<label for="" className="small-text">Pikup date</label>
										<input type="date" className="w-100" />
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-12 ps-lg-1 mb-lg-0 mb-md-0 mb-2 ">
									<div className="clockBox py-1 px-4 rounded text-start pe-3">
										<label for="" className="small-text">Drop of date</label>
										<input type="date" className="w-100" />
									</div>
								</div>
								<div className="col-lg-1 my-auto col-md-2 col-12 ps-lg-1 mb-lg-auto mb-md-0 mb-2  mt-auto h-100">
									<button className="btn btn-primary small-text h-100">Submit</button>
								</div>
							</div>
						</div>
						<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">2</div>
					  </div>
				</div>
			</div>
		</div>
	</div>
  )
}
