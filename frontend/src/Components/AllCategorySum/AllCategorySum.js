import { useEffect, useState } from "react";
import CategorySum from "../CategorySum/CategorySum";
import "./AllCategorySum.css";
import RadioButton from "../RadioButton/RadioButton";
import { useGlobalContext } from "../../Context/GlobalContext";

function AllCategorySum(props) {
  const incomeState = "Where your money is?";
  const expenseState = "Where your money go?";
  const hashMapIncomes = new Map();
  const hashMapExpenses = new Map();
  const [content, setContent] = useState();
  const [title, setTitle] = useState();

  const { getIncomes, incomes, getExpenses, expenses } = useGlobalContext();

  useEffect(() => {
  },[])

  const changeTitle = (event) => {
    setTitle(event.target.value);

    if (event.target.value === incomeState) {
      getIncomes();

      incomes.forEach((income) => {
        if (hashMapIncomes.has(income.category)) {
          const totalAmount =
            hashMapIncomes.get(income.category) + income.amount;
          hashMapIncomes.set(income.category, totalAmount);
        } else {
          hashMapIncomes.set(income.category, income.amount);
        }
      });

      const array = Array.from(hashMapIncomes, ([key, value]) => ({ key, value }));

      setContent(array.map(({ key, value }) => (
        <CategorySum key = {key} category={key} amount={value} />
      )))

    } else {
      getExpenses();

      expenses.forEach((expense) => {
        if (hashMapExpenses.has(expense.category)) {
          const totalAmount =
            hashMapExpenses.get(expense.category) + expense.amount;
          hashMapExpenses.set(expense.category, totalAmount);
        } else {
          hashMapExpenses.set(expense.category, expense.amount);
        }
      });

       const array = Array.from(hashMapExpenses, ([key, value]) => ({ key, value }));
      
      setContent(array.map(({ key, value }) => (
        <CategorySum key = {key} category={key} amount={value} />
      )))
    }
  };

  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title" style={{ display: "inline-block" }}>
          {title}
        </h5>
        <RadioButton
          incomeState={incomeState}
          expenseState={expenseState}
          title={title}
          changeTitle={changeTitle}
        />
        {content}
      </div>
    </div>
  );
}

export default AllCategorySum;
