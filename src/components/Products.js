const Products = ({ products }) => {
  return (
    <section>
      <div className="menu-section">
        <h3>Menu Section</h3>

        <div className="menu-options">
          {(products || []).map((item, i) => (
              <div key={i}> 
                <div className="menu-option">

                  <strong>{item.name}</strong>

                  <div className="menu-option-bottom-container">
                    {item.price.toLocaleString('en-AU', {style: 'currency', currency: 'AUD'})}
                  </div>
                </div>

                <div className="menu-option-code">{item.buttonDisplay}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Products;