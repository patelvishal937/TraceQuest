// Author : Sohil
// Purpose : Define FAQs posting and receiving logic that implemented in requests.
import faqModel from "../Models/faqModel.js";

//Logic function for receiving FAQs
export const getFaq = async (req, res) => {
  const data = await faqModel.find();
  try {
    res.status(200).json({
      message: "List of all FAQs",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error on getting FAQs",
      error,
    });
  }
};

//Logic function for creating(posting) FAQs
export const postFaq = async (req, res) => {
  let data = req.body;
  data = await faqModel.create(data);

  try {
    if (!data.que || !data.ans) {
      return res.status(501).json({
        error: "Question(que) and Answer(ans) are required",
      });
    }
    res.status(201).json({
      message: "FAQ Created",
      Content: data,
    });
  } catch (error) {
    res.status(501).json({
      message: "Error on getting faq",
      error,
    });
  }
};
