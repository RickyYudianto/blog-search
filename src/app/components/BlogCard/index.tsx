import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import format from 'date-fns/format';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components/macro';

import { translations } from '../../../locales/i18n';
import { SettingConstant } from '../../constants/setting.constant';
import Blog from '../../models/blog.model';

import './style.scss';

interface Props {
  blog: Blog;
  isBookmarked: boolean;
  onAddToBookmark: () => void;
  onDeleteFromBookmark: () => void;
}

export function BlogCard(props: Props) {
  const { t } = useTranslation();

  const onBookmark = () => {
    props.isBookmarked ? props.onDeleteFromBookmark() : props.onAddToBookmark();
  };

  return (
    <>
      <Card className="mb-3">
        <Card.Header>
          <Icon
            icon={faBookmark}
            color={props.isBookmarked ? 'blue' : 'grey'}
            title={t(translations.BOOKMARK)}
            onClick={() => onBookmark()}
          />
        </Card.Header>
        <Link href={props.blog.url} target="_blank">
          <Card.Body>
            <Title dangerouslySetInnerHTML={{ __html: props.blog.title }} />
            <Subtitle className="text-muted">
              <b dangerouslySetInnerHTML={{ __html: props.blog.blogname }} />
              &nbsp;•&nbsp;
              <DateTime>
                {format(
                  new Date(props.blog.datetime),
                  SettingConstant.SIMPLE_DATE_FORMAT,
                )}
              </DateTime>
            </Subtitle>
            <div className="flex-container space-between col-12 p-0">
              <Content
                className={`${
                  isEmpty(props.blog.thumbnail) ? 'col-12' : 'col-md-10 col-8'
                } p-0`}
                dangerouslySetInnerHTML={{ __html: props.blog.contents }}
              />
              {isEmpty(props.blog.thumbnail) ? null : (
                <Image
                  className="col-md-1 col-3 p-0"
                  src={props.blog.thumbnail}
                />
              )}
            </div>
          </Card.Body>
        </Link>
      </Card>
    </>
  );
}

const Title = styled(Card.Title)`
  font-size: 1.1rem !important;
  color: #343a40;
`;

const Subtitle = styled(Card.Subtitle)`
  font-size: 0.85rem !important;
  color: #a9a9a9;
  margin-bottom: 20px !important;
`;

const Image = styled(Card.Img)`
  width: 50px !important;
`;

const Content = styled(Card.Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 0.85rem;
  margin-bottom: auto;
`;

const Link = styled.a`
  text-decoration: none !important;

  color: inherit !important;

  :hover {
    color: inherit !important;
  }
`;

const DateTime = styled.span`
  font-weight: 400;
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;
