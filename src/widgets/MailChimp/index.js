import React from "react"

const MailChimp = () => (
  <aside id="bloomwidget-3" className="widget widget_bloomwidget et_bloom">
    <div className="widget_content widget_option widget_option_7">
      <div className="widget_form_container">
        <div className="widget_form_container_wrapper clearfix">
          <div className="mc_widget_header_outer">
            <div className="mc_widget_form_header mc_header_text_light">
              <div className="mc_widget_form_text">
                <h2 className="mc_widget_caption">
                  { "Bản tin Coupon" }
                </h2>
                <p className="mc_widget_lead">
                  { "Đăng ký nhận khuyến mại hấp dẫn nhất qua email" }
                </p>
              </div>
            </div>
          </div>
          <div className="mc_widget_form_content widget_fields widget_stacked">
            <form method="post"
                  action="//couponmuasam.us9.list-manage.com/subscribe/post?u=925d1993ae4d84d2fd8293ae8&id=4c87ca3b5a"
                  target="_blank" noValidate id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
            >
              <p className="widget_form_input mc_widget_subscribe_name">
                <input placeholder={ "Tên của bạn" } type="text" name="FNAME" className="required"
                       id="mce-FNAME"
                />
              </p>
              <p className="widget_form_input mc_widget_subscribe_email">
                <input placeholder={ "Email" } type="text" name="EMAIL" className="required"
                       id="mce-EMAIL"
                />
              </p>
              <button type="submit" className="mc_widget_subscription btn">
                <span className="widget_form_button_text mc_widget_button_text">
                  { "Đăng kí ngay" }
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </aside>
)

export default MailChimp