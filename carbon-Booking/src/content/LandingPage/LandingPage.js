import React from 'react';
import {Search, Toggle, Icon, Modal, Button, Loading} from "carbon-components-react";
import { connect } from 'react-redux';
import * as AppActions from '../../actions';

const LandingPage = () => {
    const { intl, itemSelected, userName, disabledSearch, collections, loading } = this.props;
    return (
        <div className="query_content" >
          <Loading className="loading-class" name="search_loading" active={loading} />
          <Modal
            open={this.state.alertDialogOpened}
            passiveModal
            modalHeading={intl.formatMessage({ id: 'ui_filterdialog_headeralert' })}
            onRequestClose={this.closeAlert}
          >
            <p>warn</p>
          </Modal>
          <div className="primary_title">title</div>
          <div className="secondary_title">second title</div>
          <div className="content">
            <Search
              name="query_content_search"
              className="query_content_search"
              labelText="Search"
              placeHolderText={intl.formatMessage({ id: 'ui_querycontent_placeholder' }, { name: userName })}
              small
              onKeyUp={this.onKeyUp}
              disabled={disabledSearch}
            />
            <Button
              name="query_button"
              className="query_button"
              onClick={this.clickQuery}
              disabled={!(collections && collections.length && this.state.queryWords && this.state.queryWords.length)}
            >
              {intl.formatMessage({ id: 'ui_app_query' })}
            </Button>
          </div>
          <div className="keyword"></div>
          <div className="collection_list_container">
            <div className="collection_label_container">
              <div className="collection_label_icon">
                <Icon
                  name={this.state.collectionListOpened ? 'icon--caret--down' : 'icon--caret--right'}
                  fill="#152935"
                  onClick={() => this.onClickCollapse()}
                  title=""
                  description=""
                />
              </div>
              <div className="collection_label_text">{intl.formatMessage({ id: 'ui_querycontent_collection_title' })}</div>
            </div>
          </div>
          <div className="mobile">
            <Button
              name="query_button"
              className="query_button"
              onClick={this.clickQueryOnMobile}
              disabled={!(collections && collections.length && this.state.queryWords && this.state.queryWords.length)}
            >
              {intl.formatMessage({ id: 'ui_app_query' })}
            </Button>
          </div>
        </div>
      );
}


const mapStateToProps = (state) => ({
    
  });
  
  const mapDispatchToProps = (dispatch) => ({
   
  });
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);