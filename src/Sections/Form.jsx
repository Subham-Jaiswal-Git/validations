import React from "react";
import Gst from "../Components/Gst";
const Form = () => {

    return (
        <>
            <div className="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full m-10 model">
                            <form>
                                <div className="space-y-5 m-10 mt-8">
                                    <div className="border-b border-gray-900/10 pb-6">
                                        <h2 className="text-base/7 font-semibold text-gray-900 ">Create New Patient</h2>
                                    </div>

                                    <div className="border-b border-gray-900/10 pb-12">
                                        <h2 className="text-base/9 font-semibold text-gray-900">Personal Details</h2>

                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div className="sm:col-span-2">
                                                <label for="first-name" className="block text-sm/6 font-medium text-gray-900">First Name</label>
                                                <div className="mt-2 border-solid border-r-10 ">
                                                    <input placeholder="Enter First Name" required type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 border border-gray-300 focus:border-blue-500" />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="last-name" className="block text-sm/6 font-medium text-gray-900">Last Name</label>
                                                <div className="mt-2">
                                                    <input placeholder="Enter Last Name" required type="text" name="last-name" id="last-name" autocomplete="family-name" className="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
                                                <div className="mt-2">
                                                    <input placeholder="Enter Email" required id="email" name="email" type="email" autocomplete="email" className="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="mob" className="block text-sm/6 font-medium text-gray-900">Phone Number</label>
                                                <div className="mt-2 grid grid-cols-1">
                                                    <input placeholder="Enter Branch Contact" required id="mob" name="mob" type="text" autocomplete="mob" className="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="gender" className="block text-sm/6 font-medium text-gray-900">Gender</label>
                                                <div className="mt-2 grid grid-cols-1">

                                                    <select required id="gender" name="gender" autocomplete="gender" className="border border-gray-300 focus:border-blue-500 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                                        <option>Select</option>
                                                        <option>Male</option>
                                                        <option>Female</option>

                                                    </select>
                                                    <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label required for="age" className="block text-sm/6 font-medium text-gray-900">Age (Yrs)</label>
                                                <div className="mt-2">
                                                    <input placeholder="Age" type="text" name="age" id="age" autocomplete="age" className="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />

                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="blood-group" className="block text-sm/6 font-medium text-gray-900">Blood Group</label>
                                                <div className="mt-2 grid grid-cols-1">

                                                    <select id="blood-group" name="blood-group" autocomplete="blood-group" className="border border-gray-300 focus:border-blue-500 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                                        <option>Select Blood Group</option>
                                                        <option>A (+Ve)</option>
                                                        <option>A (-Ve)</option>
                                                        <option>B (+Ve)</option>
                                                        <option>B (-Ve)</option>
                                                        <option>AB (+Ve)</option>
                                                        <option>AB (-Ve)</option>
                                                        <option>O (+Ve)</option>
                                                        <option>O (-Ve)</option>
                                                    </select>
                                                    <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="country" className="block text-sm/6 font-medium text-gray-900">Country</label>
                                                <div className="mt-2 grid grid-cols-1">

                                                    <select id="country" name="country" autocomplete="country-name" className="border border-gray-300 focus:border-blue-500 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                                        <option>None</option>
                                                        <option>United States</option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                    <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="region" className="block text-sm/6 font-medium text-gray-900">State</label>
                                                <div className="mt-2">
                                                    <input placeholder="Enter State" type="text" name="region" id="region" autocomplete="address-level1" className="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2 sm:col-start-1">
                                                <label for="city" className="block text-sm/6 font-medium text-gray-900">City</label>
                                                <div className="mt-2">
                                                    <input placeholder="Enter City" type="text" name="city" id="city" autocomplete="address-level2" className="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="postal-code" className="block text-sm/6 font-medium text-gray-900">ZIP</label>
                                                <div className="mt-2">
                                                    <input placeholder="Enter ZIP" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" className="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div className="col-span-3">
                                                <label for="street-address" className="block text-sm/6 font-medium text-gray-900">Street Address</label>
                                                <div className="mt-2">
                                                    <input placeholder="Enter Address" type="text" name="street-address" id="street-address" autocomplete="street-address" className="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div className="col-span-2">
                                                <label for="street-address" className="block text-sm/6 font-medium text-gray-900">GSTIN</label>
                                                <div className="mt-2">
                                                    <Gst />
                                                    {/* <input type="text" name="street-address" id="street-address" autocomplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" /> */}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto sm:ml-3 ">Save</button>
                                <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:w-auto">Cancle</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Form;
