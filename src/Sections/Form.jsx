import React from "react";
import Gst from "../Components/Gst";
const Form = () => {

    return (
        <>
            <div class="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full m-10 model">
                            <form>
                                <div class="space-y-5 m-10 mt-8">
                                    <div class="border-b border-gray-900/10 pb-6">
                                        <h2 class="text-base/7 font-semibold text-gray-900 ">Create New Patient</h2>
                                    </div>

                                    <div class="border-b border-gray-900/10 pb-12">
                                        <h2 class="text-base/9 font-semibold text-gray-900">Personal Details</h2>

                                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div class="sm:col-span-2">
                                                <label for="first-name" class="block text-sm/6 font-medium text-gray-900">First Name</label>
                                                <div class="mt-2 border-solid border-r-10 ">
                                                    <input placeholder="Enter First Name" required type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 border border-gray-300 focus:border-blue-500" />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Last Name</label>
                                                <div class="mt-2">
                                                    <input placeholder="Enter Last Name" required type="text" name="last-name" id="last-name" autocomplete="family-name" class="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
                                                <div class="mt-2">
                                                    <input placeholder="Enter Email" required id="email"  name="email" type="email" autocomplete="email" class="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="mob" class="block text-sm/6 font-medium text-gray-900">Phone Number</label>
                                                <div class="mt-2 grid grid-cols-1">
                                                    <input placeholder="Enter Branch Contact" required id="mob" name="mob" type="text" autocomplete="mob" class="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="gender" class="block text-sm/6 font-medium text-gray-900">Gender</label>
                                                <div class="mt-2 grid grid-cols-1">

                                                    <select required id="gender" name="gender" autocomplete="gender" class="border border-gray-300 focus:border-blue-500 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                                        <option>Select</option>
                                                        <option>Male</option>
                                                        <option>Female</option>

                                                    </select>
                                                    <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label required for="age" class="block text-sm/6 font-medium text-gray-900">Age (Yrs)</label>
                                                <div class="mt-2">
                                                    <input placeholder="Age" type="text" name="age" id="age" autocomplete="age" class="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                    
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="blood-group" class="block text-sm/6 font-medium text-gray-900">Blood Group</label>
                                                <div class="mt-2 grid grid-cols-1">

                                                    <select id="blood-group" name="blood-group" autocomplete="blood-group" class="border border-gray-300 focus:border-blue-500 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
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
                                                    <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="country" class="block text-sm/6 font-medium text-gray-900">Country</label>
                                                <div class="mt-2 grid grid-cols-1">

                                                    <select id="country" name="country" autocomplete="country-name" class="border border-gray-300 focus:border-blue-500 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                                        <option>None</option>
                                                        <option>United States</option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                    <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="region" class="block text-sm/6 font-medium text-gray-900">State</label>
                                                <div class="mt-2">
                                                    <input placeholder="Enter State" type="text" name="region" id="region" autocomplete="address-level1" class="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2 sm:col-start-1">
                                                <label for="city" class="block text-sm/6 font-medium text-gray-900">City</label>
                                                <div class="mt-2">
                                                    <input placeholder="Enter City" type="text" name="city" id="city" autocomplete="address-level2" class="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="postal-code" class="block text-sm/6 font-medium text-gray-900">ZIP</label>
                                                <div class="mt-2">
                                                    <input placeholder="Enter ZIP" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div class="col-span-3">
                                                <label for="street-address" class="block text-sm/6 font-medium text-gray-900">Street Address</label>
                                                <div class="mt-2">
                                                    <input placeholder="Enter Address" type="text" name="street-address" id="street-address" autocomplete="street-address" class="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div class="col-span-2">
                                                <label for="street-address" class="block text-sm/6 font-medium text-gray-900">GSTIN</label>
                                                <div class="mt-2">
                                                    <Gst/>
                                                    {/* <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" /> */}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto sm:ml-3 ">Save</button>
                                <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:w-auto">Cancle</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Form;
