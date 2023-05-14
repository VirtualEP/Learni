import React, { useEffect, useState } from "react";
import { useServerHook } from "../../hooks/useServerHook";
import { usePaystackPayment } from 'react-paystack';
import { useAuthContext } from "../../context/Auth";
import CryptoJS from 'crypto-js';

export default function ExploreInfo({ data }) {

  const { getTopics ,purchaseCourse} = useServerHook()
  const [loading, setLoading] = useState(false)
  const [topics, setTopics] = useState([])


  const { user } = useAuthContext();

  useEffect(() => {
    setLoading(true)
    getTopics(data._id).then((response) => {
      setTopics(response.data.topics)
    }).finally(() => setLoading(false))
  }, [data])

  const paymentConfig = {
    reference: (new Date()).getTime().toString(),
    email: user.user.email,
    currency: 'GHS',
    amount: parseFloat(data.price) * 100.0, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_c9b2d8522d0c769680f54766434c0df0202bc204',
  };

  const initializePayment = usePaystackPayment(paymentConfig);


  function initializePaymentAction() {

    // you can call this function anything
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
  

      const data_ = {
        reference: reference.reference,
        course:data._id
      }

      purchaseCourse(data_).then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error.message);
      }).finally(() => {});
    

  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  initializePayment(onSuccess, onClose)

}

return (
  <>
    <div className="flex-1 flex flex-col overflow-hidden overflow-y-auto">
      <div className="h-52 bg-gray-100 my-5 mx-5 rounded-xl overflow-hidden shrink-0">
        <img className="w-full" src={data.cover} />
      </div>
      <div className="mx-10 flex-1 flex flex-col">
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex items-center space-x-5">
            <p className="font-bold text-sm text-black">5.0</p>
            <p className="font-light text-xs text-gray-600">
              132,135 ratings
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <p className="my-4 text-xs text-gray-500 leading-5">
          {data.discription}
        </p>
        <div className="flex items-center space-x-5 border-b pb-5 border-gray-100 mt-2 font-light">
          {!data.live ? (
            <button className="bg-blue-400 shrink-0 text-white px-5 py-2 rounded-3xl text-sm flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Pre-Recored</p>
            </button>
          ) : (
            <button className="bg-blue-400 shrink-0 text-white px-5 py-2 rounded-3xl text-sm flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
              </svg>
              <p>Live Lesson</p>
            </button>
          )}
          <div className="text-xs ">
            <h3>
              Enroll to gain access to all{" "}
              <span className="font-bold text-gray-700">
                recoreded Lesson
              </span>{" "}
              and{" "}
              <span className="font-bold text-gray-700">
                Instructor's Contact
              </span>{" "}
              for further questions.
            </h3>
          </div>
        </div>
        <div className="flex-1 flex flex-col space-y-5 py-3">
          <h3 className="font-bold">Lessons or Contents</h3>
          <div className="flex-1 ml-3 space-y-5">
            {loading && <div className="w-full flex flex-col items-center justify-center">
              <svg className="animate-spin  h-5 w-5  text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-center text-sm text-gray-400 font-medium mt-2">Please wait...</p>
            </div>}
            {topics.map((topic, index) => <div key={`topic-${index}`} className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-gray-300"
              >
                <path
                  fillRule="evenodd"
                  d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z"
                  clipRule="evenodd"
                />
              </svg>
              <h5>{topic.title}</h5>
            </div>)}
          </div>
        </div>
      </div>
    </div>
    <button
      onClick={initializePaymentAction}
      className="bg-blue-600 text-white p-4 m-5 rounded-xl justify-center flex cursor-pointer"
      htmlFor="my-modal-4"
    >
      Enroll now GHS {data.price}
    </button>
  </>
);
}
