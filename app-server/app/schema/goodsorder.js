'use strict';

module.exports = app => {
  const { STRING, BIGINT, DATE, DECIMAL, UUIDV1, ENUM } = app.Sequelize;

  return {
    uuid: {
      type: STRING(38),
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV1,
    },
    lastModifiedTime: {
      type: DATE,
      allowNull: false,
    },
    lastModifierName: {
      type: STRING(76),
      allowNull: false,
    },
    lastModifierId: {
      type: STRING(38),
      allowNull: false,
    },
    createdTime: {
      type: DATE,
      allowNull: false,
    },
    creatorName: {
      type: STRING(76),
      allowNull: false,
    },
    creatorId: {
      type: STRING(38),
      allowNull: false,
    },
    address: {
      type: STRING(255),
      allowNull: true,
    },
    type: {
      type: STRING(20),
      allowNull: true,
    },
    // initial: '待处理', audited: '已接单', dispatching: '配送中', completed: '已完成', canceled: '已取消'
    status: ENUM('initial', 'audited', 'dispatching', 'completed', 'canceled'),
    addressUuid: {
      type: STRING(38),
      allowNull: false,
    },
    goodsTotalQty: {
      type: DECIMAL,
      allowNull: false,
    },
    deliveryTimeTypeSurcharge: {
      type: DECIMAL,
      allowNull: true,
    },
    paymentAmount: {
      type: DECIMAL,
      allowNull: true,
    },
    reductionAmount: {
      type: DECIMAL,
      allowNull: true,
    },
    deliveryTimeTypeName: {
      type: STRING(76),
      allowNull: false,
    },
    totalAmount: {
      type: DECIMAL,
      allowNull: false,
    },
    deliveryTimeTypeUuid: {
      type: STRING(38),
      allowNull: false,
    },
    deliveryTimeTypeRemark: {
      type: STRING(255),
      allowNull: true,
    },
    freightAmount: {
      type: DECIMAL,
      allowNull: true,
    },
    remark: {
      type: STRING(255),
      allowNull: true,
    },
    linkPhone: {
      type: STRING(20),
      allowNull: false,
    },
    orgUuid: {
      type: STRING(38),
      allowNull: false,
    },
    shopName: {
      type: STRING(76),
      allowNull: true,
    },
    billNumber: {
      type: STRING(38),
      allowNull: false,
    },
    linkMan: {
      type: STRING(76),
      allowNull: false,
    },
    customerName: {
      type: STRING(76),
      allowNull: false,
    },
    customerUuid: {
      type: STRING(38),
      allowNull: false,
    },
    version: {
      type: BIGINT,
      defaultValue: 0,
    },
  };
};
